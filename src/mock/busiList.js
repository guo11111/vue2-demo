import Mock from 'mockjs';
import addPublic from './addpublic';

export default function () {
  Mock.mock('/client/exercise-recent?size=10&page=1', addPublic({// 店铺列表 商品列表
    "uuid": "859619fb71c82c",
    "name": "大数据技术与应用",
    "exercise_percent": 0,
    "exercise_time": 3,
    "complete_num": 0,
    'busiData|10': [{
      'id|+1': 325,
      name: '@name',
      category: '新西兰小吃、小吃零食',
      desc: '新西兰优质淡奶，奶香浓而不腻',
      address: Mock.mock('@county(true)'),
      shop: '王小虎的店',
      mobile: /^1[0-9]{10}$/,  //用正则匹配1开头的11位数字的手机号
      'shopId|': 10333
    }]
  }))
  Mock.mock('/client/exercise-recent?size=10&page=2', addPublic({
    'busiData|5': [{
      'id|+1': 335,
      name: '@name',
      category: '新西兰小吃、小吃零食',
      desc: '新西兰优质淡奶，奶香浓而不腻',
      address: Mock.mock('@county(true)'),
      shop: '王小虎的店',
      mobile: /^1[0-9]{10}$/,
      'shopId|': 10333
    }]
  }))
  Mock.mock('/client/exercise-recent?size=20&page=1', addPublic({
    'busiData|15': [{
      'id|+1': 325,
      name: '@name',
      category: '新西兰小吃、小吃零食',
      desc: '新西兰优质淡奶，奶香浓而不腻',
      address: Mock.mock('@county(true)'),
      shop: '王小虎的店',
      mobile: /^1[0-9]{10}$/,
      'shopId|': 10333
    }]
  }))
  Mock.mock('/client/delete', 'delete', function (options) {
    var id = parseInt(options.body.split("=")[1])//获取删除的id
    var index;
    for (var i in arr) {
      if (arr[i].id === id) {//在数组arr里找到这个id
        index = i
        break;
      }
    }
    arr.splice(index, 1)//把这个id对应的对象从数组里删除
    return arr;//返回这个数组,也就是返回处理后的假数据
  })
  Mock.mock('/client/examination-detail', addPublic({  // 训练列表模块数据
    "uuid": "8595f4761d3d4d",
    "title": "MapReduce开发基础",
    "desc": "MapReduce开发基础xxxx",
    "exercise_percent": 0,
    "exercise_time": 6,
    "action": true,
    "exercise": {
      "uuid": "859619fb71c82c",
      "name": "大数据技术与应用"
    },
    "part": {
      "uuid": "8596cb92aba190",
      "name": "阶段一",
      "title": "Hadoop平台基本配置",
      "weight": 80,
      "exerciseUUId": "859619fb71c82c"
    },
    "pre_experiment": {
      "id": 2,
      "title": "利用arp协议缺陷实现中间人攻击"
    },
    "list": [
      {
        "title": "xxxxxxx",
        "experiment_list": [
          {
            "id": 2,
            "os_time": "01:20:00",
            "title": "利用arp协议缺陷实现中间人攻击",
            "desc": "",
            "join_times": 4,
            "complete_status": 4,
            "estimated_time": 80
          }
        ]
      }
    ]
  }))
  Mock.mock('/client/profile-examination', addPublic({  // 学生中心 我的训练
    "data": [
      {
        "examination_uuid": "33ff", // 考点uuid
        "exercise_uuid": "33ff", //

        "examination_title": "你好",
        "experment": {
          "id": "3ddff",
          "title": "hadoop平台安装部署",
          "desc": "北京和需求，考虑到衡量大数据分析平台的数据主要有两关来源"
        },
        "time": "2017-12-33"
      },
      {
        "examination_uuid": "33ff",
        "examination_title": "你好",
        "experment": {
          "id": "dsfdff",
          "title": "那妮鸥",
          "desc": "喝喝茶考虑到衡量大数据分析平台的数据主要有两关来源"
        },
        "time": "2018-12-33"
      }
    ],
    "total": 2,
    "size": 2,
    "page": 1
  }))
}
