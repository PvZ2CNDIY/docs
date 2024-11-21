# 模块
## TimeEnergy
回忆之旅能量条
### 参数
* `TimeEnergyValueMax`: `float` 时空能量最大值，默认值为`300.0`
* `TimeEnergyTriggers`: `array[object]` 时空触发器，默认拥有虫洞两个、传送门两个、黑洞一个
  * `TriggerRange`: `object` 触发范围
    * `Min`: `float` 触发范围的最低百分比
    * `Max`: `float` 触发范围的最高百分比
  * `Cooldown`: `float` 触发的冷却长度
  * `TriggerType`: `string` 触发器类型
    * 根据触发器类型不同，仍有其他参数，此处略去

## TimeEnergy1

同**TimeEnergy**，但有以下差别：
* 时空能量最大值默认值为`350.0`
* 传送门时机有细微差异
* 传送门类型为`"pvz1_B"`与`"pvz1_C"`，而非`"pvz1_A"`

## TimeEnergy2
同**TimeEnergy**，但有以下差别：
* 时空能量最大值默认值为`350.0`
* 仅有一个时空触发器，为虫洞，触发区间为`0.0~0.1`，冷却值为`9999.0`

## SeedPacketHalfTimeModule
使卡槽内的卡片冷却缩短至原先的一半
### 参数
* `CooldownMultiplier` : `float` 具体缩短的倍数，默认值为`0.5`
* `HomeworldToExcludeFromOverride`: `string` <Badge type="warning" text="尚不确定" /> 其中排除掉的植物的所属世界，默认值为`""`
  * 该参数默认值为空，未发现实用

## DefaultSunDropper
阳光掉落
### 参数
* `InitialSunDropDelay` : `float` 初始阳光掉落延迟，默认值为`2.0`
* `SunCountdownBase` : `float` 基础阳光掉落间隔，默认值为`4.25`
* `SunCountdownRange` : `float` <Badge type="warning" text="尚不确定" /> 阳光掉落间隔的浮动范围，默认值为`2.75`
* `SunCountdownIncreasePerSun` : `float` 每个阳光掉落后，阳光掉落间隔的增长量，默认值为`0.1`
* `SunCountdownMax` : `float` 阳光掉落间隔的最大值，默认为`9.5`

## ArenaScoreTiles
超Z的分数地砖
### 参数
* `InitialGridItemPlacements` : `array[object]` 分数地砖放置列表
  * `GridX` : `int` 放置的列
  * `GridY` : `int` 放置的行
  * `TypeName` : `string` 具体放置的地砖类型

默认值将在8,9列放置5x分数地砖，在6,7列放置3x分数地砖，在4,5列放置2x分数地砖
