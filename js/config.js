/**
 *游戏相关配置
 * @type {Object}
 */
var CONFIG = {
	planeSize: {
		width: 60,
		height: 45
	},
	planeType: 'bluePlaneIcon', //默认黄色
	bulletSize: {
		width: 20,
		height: 20
	},
	enemySpeed: 4,//默认敌人移动距离
	enemyMaxNum: 5,//敌人最大数量
	enemySmallSize: {
		width: 54,
		height: 40
	},
	enemyBigSize: {
		width: 130,
		height: 100
	},
	bulletSpeed: 10,//默认子弹的移动速度
	resources: {
		images: [
			{
				src: './img/plane_1.png',
				name: 'bluePlaneIcon'
			},
			{
				src: './img/plane_2.png',
				name: 'pinkPlaneIcon'
			},
			{
				src: './img/fire.png',
				name: 'fireIcon'
			},
			{
				src: './img/enemy_big.png',
				name: 'enemyBigIcon'
			},
			{
				src: './img/enemy_small.png',
				name: 'enemySmallIcon'
			},
			{
				src: './img/boom_big.png',
				name: 'enemyBigBoomIcon'
			},
			{
				src: './img/boom_small.png',
				name: 'enemySmallBoomIcon'
			}
		]		
	}
}
