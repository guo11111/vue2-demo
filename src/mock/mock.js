import Mock from 'mockjs';
// import publicMsg from './module/public'; // 登录信息   学校信息
// publicMsg();
import experiment from './busiList' // 店铺列表
experiment();

// 课程
Mock.mock('/api/course', {
  "code": "0",
  "result": {
    "type": [{
      "name": "全部",
      "id": 0,
      "href": "/course"
    }, {
      "name": "本校",
      "id": 1,
      "href": "/course/type/1"
    }, {
      "name": "公开课",
      "id": 2,
      "href": "/course/type/2"
    }],
    "profession": [{
      "name": "全部",
      "id": 0,
      "href": "/profession"
    }, {
      "name": "信息安全",
      "id": 1,
      "href": "/profession/type/1"
    }, {
      "name": "大数据",
      "id": 2,
      "href": "/profession/type/2"
    }, {
      "name": "云计算",
      "id": 3,
      "href": "/profession/type/3"
    }, {
      "name": "网络工程",
      "id": 4,
      "href": "/profession/type/4"
    }, {
      "name": "计算机基础",
      "id": 5,
      "href": "/profession/type/5"
    }, {
      "name": "移动应用",
      "id": 6,
      "href": "/profession/type/6"
    }],
    "total": 120,
    "size": 20,
    "course_data|12": [
      {
        'id|+1': 1,
        "type": "0",
        "status": "@boolean",
        "logo": "/static/images/course2.jpg",
        "title": '@ctitle(5, 15)',
        "content": '@csentence(10, 100)',
        "teacher": "@cname(0, 5)",
        "number|1-100": 100,
        "time": '@time("H:m")',
      }
    ]
  }
})
Mock.mock('/api/course/change', {
  "code": "0",
  "result": {
    "size": 10,
    "page": 3,
    "total": 234,
    "course_data|12": [
      {
        'id|+1': 1,
        "type": "公开课",
        "status": "@boolean",
        "title": '@ctitle(5, 15)',
        "content": '@csentence(10, 100)',
        "teacher": "@cname(0, 5)",
        "num": "number|1-100",
      }
    ]
  }
})




