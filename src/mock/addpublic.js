/**
 * @func
 * @desc 对data进行包装， 包含状态码code和msg 视具体业务逻辑使用。如后端可返回code:001  msg:'数据库异常'
 * @param data 返回值
 * @returns {*}
 */
export default function (data) {
  const publics = {
    'code': '000',
    'msg': '后端返回的消息'
  };
  return Object.assign(publics,{result:data});
}
