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

## DefaultRainDark
启用暴风雨黑屏效果
### 参数
* `InitialDarkDelay` : `float` 暴风雨黑暗效果启动延迟，默认值为`2.0`
* `DarkCountdownBase` : `float` 基础闪电照亮间隔，默认值为`4.25`
* `DarkCountdownRange` : `float` <Badge type="warning" text="尚不确定" /> 闪电照亮间隔的浮动范围，默认值为`2.75`
* `DarkCountdownIncreasePerDark` : `float` 每次闪电照亮后，闪电照亮间隔的增长量，默认值为`0.1`
* `DarkCountdownMax` : `float` 闪电照亮间隔的最大值，默认为`9.5`

## FrontLawnMowers
放置前院小推车
### 参数
* `ResourceGroupNames` : `array[string]` 对应的资源组，默认值与小推车具体类型有关
* `MowerEntryAnimDuration` : `float` 小推车进入动画用时，默认为`2.5`
* `MowerActivatedAudioEvent": `string` 小推车激活时产生的音效，默认值与小推车类型有关
* `MowerPopAnim`: `string` 小推车的<Badge type="warning" text="需要明确" />Pop动画名，默认值与小推车类型有关
* `MowerIdleAnimWeights` : `array[int]` 小推车播放动画时的动画权重，默认未定义
* `MowerExplodeAtGridX`: `int` 小推车自毁的行数，默认未定义
* `UnlimitedMowers` : `bool` <Badge type="warning" text="尚不确定" /> 小推车无限量，默认为未定义
 *  出现于`SCORINGPLAYTEST7D.JSON`
### 变种
| 小推车类型 | 使用场地 | 备注 |
| :---: | :----: | :---: |
| FrontLawnMowers|前院小推车||
| EgyptMowers | 埃及小推车||
| PirateMowers| 海盗小推车||
| WestMowers|西部小推车||
| KongFuMowers|功夫小推车||
| FutureMowers|未来小推车||
| BrainMowers|未来脑子小推车| 未使用，<Badge type="warning" text="尚不确定" />疑似与我是僵尸模式下的脑子有关 |
| DarkMowers| 黑暗小推车||
| BeachMowers| 沙滩小推车||
| IceageMowers|冰河小推车|`MowerIdleAnimWeights`被定义为`[500,5,2]`|
| IceageZombossMowers| 冰河僵王小推车|`MowerIdleAnimWeights`被定义为`[500,5,2]` <br> `MowerExplodeAtGridX`被定义为`6`|
| LostCityMowers| 失落小推车||
| EightiesMowers| 摇滚小推车||
| EightiesZombossMowers| 摇滚僵王小推车|`MowerExplodeAtGridX`被定义为`7`|
| DinoMowers| 侏罗纪小推车||
| ModernMowers|摩登小推车||
| SteamMowers| 蒸汽小推车||
| RenaiMowers| 复兴小推车||
| HeianMowers| 平安小推车||
| FairyTaleMowers | 童话小推车||
| RunningSubwayMowers| 地铁跑酷联动小推车||


