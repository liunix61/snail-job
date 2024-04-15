package com.aizuda.snail.job.template.datasource.access.config;

import com.aizuda.snail.job.common.core.enums.NodeTypeEnum;
import com.aizuda.snail.job.common.core.enums.NotifySceneEnum;
import com.aizuda.snail.job.server.model.dto.ConfigDTO;
import com.aizuda.snail.job.template.datasource.access.ConfigAccess;
import com.aizuda.snail.job.template.datasource.enums.DbTypeEnum;
import com.aizuda.snail.job.common.core.enums.StatusEnum;
import com.aizuda.snail.job.template.datasource.persistence.mapper.GroupConfigMapper;
import com.aizuda.snail.job.template.datasource.persistence.mapper.NotifyConfigMapper;
import com.aizuda.snail.job.template.datasource.persistence.mapper.SceneConfigMapper;
import com.aizuda.snail.job.template.datasource.persistence.po.GroupConfig;
import com.aizuda.snail.job.template.datasource.persistence.po.NotifyConfig;
import com.aizuda.snail.job.template.datasource.persistence.po.SceneConfig;
import com.aizuda.snail.job.template.datasource.utils.DbUtils;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;

import java.util.*;
import java.util.stream.Collectors;

/**
 * 获取配置通道通用模板
 *
 * @author: opensnail
 * @date : 2022-01-05 09:12
 */
public abstract class AbstractConfigAccess<T> implements ConfigAccess<T> {

    @Autowired
    protected NotifyConfigMapper notifyConfigMapper;
    @Autowired
    protected SceneConfigMapper sceneConfigMapper;
    @Autowired
    protected GroupConfigMapper groupConfigMapper;

    protected static final List<String> ALLOW_DB = Arrays.asList(
        DbTypeEnum.MYSQL.getDb(),
        DbTypeEnum.MARIADB.getDb(),
        DbTypeEnum.POSTGRES.getDb(),
        DbTypeEnum.ORACLE.getDb(),
        DbTypeEnum.SQLSERVER.getDb());

    protected DbTypeEnum getDbType() {
        return DbUtils.getDbType();
    }

    protected List<NotifyConfig> getByGroupIdAndNotifyScene(String groupName, Integer notifyScene, String namespaceId) {
        return notifyConfigMapper.selectList(
            new LambdaQueryWrapper<NotifyConfig>()
                .eq(NotifyConfig::getNamespaceId, namespaceId)
                .eq(NotifyConfig::getGroupName, groupName)
                .eq(NotifyConfig::getNotifyScene, notifyScene));
    }

    private List<NotifyConfig> getByGroupIdAndSceneIdAndNotifyScene(String groupName, String sceneName,
        Integer notifyScene) {
        return notifyConfigMapper.selectList(
            new LambdaQueryWrapper<NotifyConfig>().eq(NotifyConfig::getGroupName, groupName)
                .eq(NotifyConfig::getSceneName, sceneName)
                .eq(NotifyConfig::getNotifyScene, notifyScene));
    }

    protected SceneConfig getByGroupNameAndSceneName(String groupName, String sceneName, String namespaceId) {
        return sceneConfigMapper.selectOne(new LambdaQueryWrapper<SceneConfig>()
            .eq(SceneConfig::getNamespaceId, namespaceId)
            .eq(SceneConfig::getGroupName, groupName)
            .eq(SceneConfig::getSceneName, sceneName));
    }

    protected List<SceneConfig> getSceneConfigs(String groupName) {
        return sceneConfigMapper.selectList(new LambdaQueryWrapper<SceneConfig>()
            .eq(SceneConfig::getGroupName, groupName));
    }

    protected GroupConfig getByGroupName(String groupName, final String namespaceId) {
        return groupConfigMapper.selectOne(new LambdaQueryWrapper<GroupConfig>()
            .eq(GroupConfig::getNamespaceId, namespaceId)
            .eq(GroupConfig::getGroupName, groupName));
    }

    protected List<NotifyConfig> getNotifyConfigs(String groupName, String namespaceId) {
        return notifyConfigMapper.selectList(
            new LambdaQueryWrapper<NotifyConfig>()
                .eq(NotifyConfig::getNamespaceId, namespaceId)
                .eq(NotifyConfig::getGroupName, groupName));
    }

    @Override
    public Set<String> getGroupNameList(String namespaceId) {
        List<GroupConfig> groupList = getAllConfigGroupList(namespaceId);
        return groupList.stream().map(GroupConfig::getGroupName).collect(Collectors.toSet());
    }

    @Override
    public GroupConfig getGroupConfigByGroupName(String groupName, String namespaceId) {
        return getByGroupName(groupName, namespaceId);
    }

    @Override
    public SceneConfig getSceneConfigByGroupNameAndSceneName(String groupName, String sceneName, String namespaceId) {
        return getByGroupNameAndSceneName(groupName, sceneName, namespaceId);
    }

    @Override
    public List<NotifyConfig> getNotifyConfigByGroupName(String groupName, Integer notifyScene, String namespaceId) {
        return getByGroupIdAndNotifyScene(groupName, notifyScene, namespaceId);
    }

    @Override
    public List<NotifyConfig> getNotifyConfigByGroupNameAndSceneName(String groupName, String sceneName,
        Integer notifyScene) {
        return getByGroupIdAndSceneIdAndNotifyScene(groupName, sceneName, notifyScene);
    }

    @Override
    public List<NotifyConfig> getNotifyListConfigByGroupName(String groupName, String namespaceId) {
        return getNotifyConfigs(groupName, namespaceId);
    }

    @Override
    public List<SceneConfig> getSceneConfigByGroupName(String groupName) {
        return getSceneConfigs(groupName);
    }

    @Override
    public List<GroupConfig> getAllOpenGroupConfig(String namespaceId) {
        return getAllConfigGroupList(namespaceId).stream().filter(i -> StatusEnum.YES.getStatus().equals(i.getGroupStatus()))
            .collect(Collectors.toList());
    }

    @Override
    public Set<String> getBlacklist(String groupName, String namespaceId) {

        GroupConfig groupConfig = getByGroupName(groupName, namespaceId);
        if (Objects.isNull(groupConfig)) {
            return Collections.EMPTY_SET;
        }

        LambdaQueryWrapper<SceneConfig> sceneConfigLambdaQueryWrapper = new LambdaQueryWrapper<SceneConfig>()
            .select(SceneConfig::getSceneName)
            .eq(SceneConfig::getGroupName, groupName);

        if (StatusEnum.YES.getStatus().equals(groupConfig.getGroupStatus())) {
            sceneConfigLambdaQueryWrapper.eq(SceneConfig::getSceneStatus, StatusEnum.NO.getStatus());
        }

        List<SceneConfig> sceneConfigs = sceneConfigMapper.selectList(sceneConfigLambdaQueryWrapper);
        if (CollectionUtils.isEmpty(sceneConfigs)) {
            return Collections.EMPTY_SET;
        }

        return sceneConfigs.stream().map(SceneConfig::getSceneName).collect(Collectors.toSet());
    }

    @Override
    public List<GroupConfig> getAllConfigGroupList(String namespaceId) {
        List<GroupConfig> allSystemConfigGroupList = groupConfigMapper.selectList(
            new LambdaQueryWrapper<GroupConfig>()
                .eq(GroupConfig::getNamespaceId, namespaceId)
                .orderByAsc(GroupConfig::getId));
        if (CollectionUtils.isEmpty(allSystemConfigGroupList)) {
            return Collections.EMPTY_LIST;
        }

        return allSystemConfigGroupList;
    }

    @Override
    public List<SceneConfig> getAllConfigSceneList() {
        List<SceneConfig> allSystemConfigSceneList = sceneConfigMapper.selectList(
            new LambdaQueryWrapper<SceneConfig>().orderByAsc(SceneConfig::getId));
        if (CollectionUtils.isEmpty(allSystemConfigSceneList)) {
            return Collections.EMPTY_LIST;
        }
        return allSystemConfigSceneList;
    }

    @Override
    public Integer getConfigVersion(String groupName, String namespaceId) {
        GroupConfig groupConfig = getGroupConfigByGroupName(groupName, namespaceId);
        if (Objects.isNull(groupConfig)) {
            return 0;
        }

        return groupConfig.getVersion();
    }

    @Override
    public ConfigDTO getConfigInfo(String groupName, final String namespaceId) {

        ConfigDTO configDTO = new ConfigDTO();
        configDTO.setSceneBlacklist(getBlacklist(groupName, namespaceId));
        configDTO.setVersion(getConfigVersion(groupName, namespaceId));

        List<NotifyConfig> notifyList = getNotifyListConfigByGroupName(groupName, namespaceId);

        List<ConfigDTO.Notify> notifies = new ArrayList<>();
        for (NotifyConfig notifyConfig : notifyList) {

            // 只选择客户端的通知配置即可
            NotifySceneEnum notifyScene = NotifySceneEnum.getNotifyScene(notifyConfig.getNotifyScene(),
                NodeTypeEnum.CLIENT);
            if (Objects.isNull(notifyScene)) {
                continue;
            }

            ConfigDTO.Notify notify = new ConfigDTO.Notify();
            notify.setNotifyScene(notifyConfig.getNotifyScene());
            notify.setNotifyType(notifyConfig.getNotifyType());
            notify.setNotifyThreshold(notifyConfig.getNotifyThreshold());
            notify.setNotifyAttribute(notifyConfig.getNotifyAttribute());
            notifies.add(notify);
        }

        configDTO.setNotifyList(notifies);

        List<SceneConfig> sceneConfig = getSceneConfigByGroupName(groupName);

        List<ConfigDTO.Scene> sceneList = new ArrayList<>();
        for (SceneConfig config : sceneConfig) {
            ConfigDTO.Scene scene = new ConfigDTO.Scene();
            scene.setSceneName(config.getSceneName());
            scene.setDdl(config.getDeadlineRequest());
            sceneList.add(scene);
        }

        configDTO.setSceneList(sceneList);
        return configDTO;
    }
}