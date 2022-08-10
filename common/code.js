/**
 * 阿里巴巴Java开发手册-崇山版-2020.08.03 错误码整理
 * 错误码：
 * 1. 五位组成
 * 2. A代表用户端错误
 * 3. B代表当前系统异常
 * 4. C代表第三方服务异常
 * 4. 若无法确定具体错误，选择宏观错误
 * 6. 大的错误类间的步长间距预留100
 */
export default {
  /**
   * 成功
   */
  SUCCESS: { code: '00000', msg: '一切 ok' },
  /**
   * 一级宏观错误码
   */
  USER_ERROR_0001: { code: 'A0001', msg: '用户端错误' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0100: { code: 'A0100', msg: '用户注册错误' },
  USER_ERROR_A0101: { code: 'A0101', msg: '用户未同意隐私协议' },
  USER_ERROR_A0102: { code: 'A0102', msg: '注册国家或地区受限' },
  USER_ERROR_A0110: { code: 'A0110', msg: '用户名校验失败' },
  USER_ERROR_A0111: { code: 'A0111', msg: '用户名已存在' },
  USER_ERROR_A0112: { code: 'A0112', msg: '用户名包含敏感词' },
  USER_ERROR_A0113: { code: 'A0113', msg: '用户名包含特殊字符' },
  USER_ERROR_A0120: { code: 'A0120', msg: '密码校验失败' },
  USER_ERROR_A0121: { code: 'A0121', msg: '密码长度不够' },
  USER_ERROR_A0122: { code: 'A0122', msg: '密码强度不够' },
  USER_ERROR_A0130: { code: 'A0130', msg: '校验码输入错误' },
  USER_ERROR_A0131: { code: 'A0131', msg: '短信校验码输入错误' },
  USER_ERROR_A0132: { code: 'A0132', msg: '邮件校验码输入错误' },
  USER_ERROR_A0133: { code: 'A0133', msg: '语音校验码输入错误' },
  USER_ERROR_A0140: { code: 'A0140', msg: '用户证件异常' },
  USER_ERROR_A0141: { code: 'A0141', msg: '用户证件类型未选择' },
  USER_ERROR_A0142: { code: 'A0142', msg: '大陆身份证编号校验非法' },
  USER_ERROR_A0143: { code: 'A0143', msg: '护照编号校验非法' },
  USER_ERROR_A0144: { code: 'A0144', msg: '军官证编号校验非法' },
  USER_ERROR_A0150: { code: 'A0150', msg: '用户基本信息校验失败' },
  USER_ERROR_A0151: { code: 'A0151', msg: '手机格式校验失败' },
  USER_ERROR_A0152: { code: 'A0152', msg: '地址格式校验失败' },
  USER_ERROR_A0153: { code: 'A0153', msg: '邮箱格式校验失败' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0200: { code: 'A0200', msg: '用户登录异常' },
  USER_ERROR_A0201: { code: 'A0201', msg: '用户账户不存在' },
  USER_ERROR_A0202: { code: 'A0202', msg: '用户账户被冻结' },
  USER_ERROR_A0203: { code: 'A0203', msg: '用户账户已作废' },
  USER_ERROR_A0210: { code: 'A0210', msg: '用户密码错误' },
  USER_ERROR_A0211: { code: 'A0211', msg: '用户输入密码错误次数超限' },
  USER_ERROR_A0220: { code: 'A0220', msg: '用户身份校验失败' },
  USER_ERROR_A0221: { code: 'A0221', msg: '用户指纹识别失败' },
  USER_ERROR_A0222: { code: 'A0222', msg: '用户面容识别失败' },
  USER_ERROR_A0223: { code: 'A0223', msg: '用户未获得第三方登录授权' },
  USER_ERROR_A0230: { code: 'A0230', msg: '用户登录已过期' },
  USER_ERROR_A0240: { code: 'A0240', msg: '用户验证码错误' },
  USER_ERROR_A0241: { code: 'A0241', msg: '用户验证码尝试次数超限' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0300: { code: 'A0300', msg: '访问权限异常' },
  USER_ERROR_A0301: { code: 'A0301', msg: '访问未授权' },
  USER_ERROR_A0302: { code: 'A0302', msg: '正在授权中' },
  USER_ERROR_A0303: { code: 'A0303', msg: '用户授权申请被拒绝' },
  USER_ERROR_A0310: { code: 'A0310', msg: '因访问对象隐私设置被拦截' },
  USER_ERROR_A0311: { code: 'A0311', msg: '授权已过期' },
  USER_ERROR_A0312: { code: 'A0312', msg: '无权限使用 API' },
  USER_ERROR_A0320: { code: 'A0320', msg: '用户访问被拦截' },
  USER_ERROR_A0321: { code: 'A0321', msg: '黑名单用户' },
  USER_ERROR_A0322: { code: 'A0322', msg: '账号被冻结' },
  USER_ERROR_A0323: { code: 'A0323', msg: '非法 IP 地址' },
  USER_ERROR_A0324: { code: 'A0324', msg: '网关访问受限' },
  USER_ERROR_A0325: { code: 'A0325', msg: '地域黑名单' },
  USER_ERROR_A0330: { code: 'A0330', msg: '服务已欠费' },
  USER_ERROR_A0340: { code: 'A0340', msg: '用户签名异常' },
  USER_ERROR_A0341: { code: 'A0341', msg: 'RSA 签名错误' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0400: { code: 'A0400', msg: '用户请求参数错误' },
  USER_ERROR_A0401: { code: 'A0401', msg: '包含非法恶意跳转链接' },
  USER_ERROR_A0402: { code: 'A0402', msg: '无效的用户输入' },
  USER_ERROR_A0410: { code: 'A0410', msg: '请求必填参数为空' },
  USER_ERROR_A0411: { code: 'A0411', msg: '用户订单号为空' },
  USER_ERROR_A0412: { code: 'A0412', msg: '订购数量为空' },
  USER_ERROR_A0413: { code: 'A0413', msg: '缺少时间戳参数' },
  USER_ERROR_A0414: { code: 'A0414', msg: '非法的时间戳参数' },
  USER_ERROR_A0420: { code: 'A0420', msg: '请求参数值超出允许的范围' },
  USER_ERROR_A0421: { code: 'A0421', msg: '参数格式不匹配' },
  USER_ERROR_A0422: { code: 'A0422', msg: '地址不在服务范围' },
  USER_ERROR_A0423: { code: 'A0423', msg: '时间不在服务范围' },
  USER_ERROR_A0424: { code: 'A0424', msg: '金额超出限制' },
  USER_ERROR_A0425: { code: 'A0425', msg: '数量超出限制' },
  USER_ERROR_A0426: { code: 'A0426', msg: '请求批量处理总个数超出限制' },
  USER_ERROR_A0427: { code: 'A0427', msg: '请求 JSON 解析失败' },
  USER_ERROR_A0430: { code: 'A0430', msg: '用户输入内容非法' },
  USER_ERROR_A0431: { code: 'A0431', msg: '包含违禁敏感词' },
  USER_ERROR_A0432: { code: 'A0432', msg: '图片包含违禁信息' },
  USER_ERROR_A0433: { code: 'A0433', msg: '文件侵犯版权' },
  USER_ERROR_A0440: { code: 'A0440', msg: '用户操作异常' },
  USER_ERROR_A0441: { code: 'A0441', msg: '用户支付超时' },
  USER_ERROR_A0442: { code: 'A0442', msg: '确认订单超时' },
  USER_ERROR_A0443: { code: 'A0443', msg: '订单已关闭' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0500: { code: 'A0500', msg: '用户请求服务异常' },
  USER_ERROR_A0501: { code: 'A0501', msg: '请求次数超出限制' },
  USER_ERROR_A0502: { code: 'A0502', msg: '请求并发数超出限制' },
  USER_ERROR_A0503: { code: 'A0503', msg: '用户操作请等待' },
  USER_ERROR_A0504: { code: 'A0504', msg: 'WebSocket 连接异常' },
  USER_ERROR_A0505: { code: 'A0505', msg: 'WebSocket 连接断开' },
  USER_ERROR_A0506: { code: 'A0506', msg: '用户重复请求' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0600: { code: 'A0600', msg: '用户资源异常' },
  USER_ERROR_A0601: { code: 'A0601', msg: '账户余额不足' },
  USER_ERROR_A0602: { code: 'A0602', msg: '用户磁盘空间不足' },
  USER_ERROR_A0603: { code: 'A0603', msg: '用户内存空间不足' },
  USER_ERROR_A0604: { code: 'A0604', msg: '用户 OSS 容量不足' },
  /**
   * 例如：每天抽奖数
   */
  USER_ERROR_A0605: { code: 'A0605', msg: '用户配额已用光' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0700: { code: 'A0700', msg: '用户上传文件异常' },
  USER_ERROR_A0701: { code: 'A0701', msg: '用户上传文件类型不匹配' },
  USER_ERROR_A0702: { code: 'A0702', msg: '用户上传文件太大' },
  USER_ERROR_A0703: { code: 'A0703', msg: '用户上传图片太大' },
  USER_ERROR_A0704: { code: 'A0704', msg: '用户上传视频太大' },
  USER_ERROR_A0705: { code: 'A0705', msg: '用户上传压缩文件太大' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0800: { code: 'A0800', msg: '用户当前版本异常' },
  USER_ERROR_A0801: { code: 'A0801', msg: '用户安装版本与系统不匹配' },
  USER_ERROR_A0802: { code: 'A0802', msg: '用户安装版本过低' },
  USER_ERROR_A0803: { code: 'A0803', msg: '用户安装版本过高' },
  USER_ERROR_A0804: { code: 'A0804', msg: '用户安装版本已过期' },
  USER_ERROR_A0805: { code: 'A0805', msg: '用户 API 请求版本不匹配' },
  USER_ERROR_A0806: { code: 'A0806', msg: '用户 API 请求版本过高' },
  USER_ERROR_A0807: { code: 'A0807', msg: '用户 API 请求版本过低' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A0900: { code: 'A0900', msg: '用户隐私未授权' },
  USER_ERROR_A0901: { code: 'A0901', msg: '用户隐私未签署' },
  USER_ERROR_A0902: { code: 'A0902', msg: '用户摄像头未授权' },
  USER_ERROR_A0903: { code: 'A0903', msg: '用户相机未授权' },
  USER_ERROR_A0904: { code: 'A0904', msg: '用户图片库未授权' },
  USER_ERROR_A0905: { code: 'A0905', msg: '用户文件未授权' },
  USER_ERROR_A0906: { code: 'A0906', msg: '用户位置信息未授权' },
  USER_ERROR_A0907: { code: 'A0907', msg: '用户通讯录未授权' },
  /**
   * 二级宏观错误码
   */
  USER_ERROR_A1000: { code: 'A1000', msg: '用户设备异常' },
  USER_ERROR_A1001: { code: 'A1001', msg: '用户相机异常' },
  USER_ERROR_A1002: { code: 'A1002', msg: '用户麦克风异常' },
  USER_ERROR_A1003: { code: 'A1003', msg: '用户听筒异常' },
  USER_ERROR_A1004: { code: 'A1004', msg: '用户扬声器异常' },
  USER_ERROR_A1005: { code: 'A1005', msg: '用户 GPS 定位异常' },

  /**
   * 系统异常
   * 一级宏观错误码
   */
  SYSTEM_ERROR_B0001: { code: 'B0001', msg: '系统执行出错' },
  /**
   * 二级宏观错误码
   */
  SYSTEM_ERROR_B0100: { code: 'B0100', msg: '系统执行超时' },
  SYSTEM_ERROR_B0101: { code: 'B0101', msg: '系统订单处理超时' },
  /**
   * 二级宏观错误码
   */
  SYSTEM_ERROR_B0200: { code: 'B0200', msg: '系统容灾功能被触发' },
  SYSTEM_ERROR_B0210: { code: 'B0210', msg: '系统限流' },
  SYSTEM_ERROR_B0220: { code: 'B0220', msg: '系统功能降级' },
  /**
   * 二级宏观错误码
   */
  SYSTEM_ERROR_B0300: { code: 'B0300', msg: '系统资源异常' },
  SYSTEM_ERROR_B0310: { code: 'B0310', msg: '系统资源耗尽' },
  SYSTEM_ERROR_B0311: { code: 'B0311', msg: '系统磁盘空间耗尽' },
  SYSTEM_ERROR_B0312: { code: 'B0312', msg: '系统内存耗尽' },
  SYSTEM_ERROR_B0313: { code: 'B0313', msg: '文件句柄耗尽' },
  SYSTEM_ERROR_B0314: { code: 'B0314', msg: '系统连接池耗尽' },
  SYSTEM_ERROR_B0315: { code: 'B0315', msg: '系统线程池耗尽' },
  SYSTEM_ERROR_B0320: { code: 'B0320', msg: '系统资源访问异常' },
  SYSTEM_ERROR_B0321: { code: 'B0321', msg: '系统读取磁盘文件失败' },

  /**
   * 调用第三方服务
   * 一级宏观错误码
   */
  SERVICE_ERROR_C0001: { code: 'C0001', msg: '调用第三方服务出错' },
  /**
   * 二级宏观错误码
   */
  SERVICE_ERROR_C0100: { code: 'C0100', msg: '中间件服务出错' },
  SERVICE_ERROR_C0110: { code: 'C0110', msg: 'RPC 服务出错' },
  SERVICE_ERROR_C0111: { code: 'C0111', msg: 'RPC 服务未找到' },
  SERVICE_ERROR_C0112: { code: 'C0112', msg: 'RPC 服务未注册' },
  SERVICE_ERROR_C0113: { code: 'C0113', msg: '接口不存在' },
  SERVICE_ERROR_C0120: { code: 'C0120', msg: '消息服务出错' },
  SERVICE_ERROR_C0121: { code: 'C0121', msg: '消息投递出错' },
  SERVICE_ERROR_C0122: { code: 'C0122', msg: '消息消费出错' },
  SERVICE_ERROR_C0123: { code: 'C0123', msg: '消息订阅出错' },
  SERVICE_ERROR_C0124: { code: 'C0124', msg: '消息分组未查到' },
  SERVICE_ERROR_C0130: { code: 'C0130', msg: '缓存服务出错' },
  SERVICE_ERROR_C0131: { code: 'C0131', msg: 'key 长度超过限制' },
  SERVICE_ERROR_C0132: { code: 'C0132', msg: 'value 长度超过限制' },
  SERVICE_ERROR_C0133: { code: 'C0133', msg: '存储容量已满' },
  SERVICE_ERROR_C0134: { code: 'C0134', msg: '不支持的数据格式' },
  SERVICE_ERROR_C0140: { code: 'C0140', msg: '配置服务出错' },
  SERVICE_ERROR_C0150: { code: 'C0150', msg: '网络资源服务出错' },
  SERVICE_ERROR_C0151: { code: 'C0151', msg: 'VPN 服务出错' },
  SERVICE_ERROR_C0152: { code: 'C0152', msg: 'CDN 服务出错' },
  SERVICE_ERROR_C0153: { code: 'C0153', msg: '域名解析服务出错' },
  SERVICE_ERROR_C0154: { code: 'C0154', msg: '网关服务出错' },
  /**
   * 二级宏观错误码
   */
  SERVICE_ERROR_C0200: { code: 'C0200', msg: '第三方系统执行超时' },
  SERVICE_ERROR_C0210: { code: 'C0210', msg: 'RPC 执行超时' },
  SERVICE_ERROR_C0220: { code: 'C0220', msg: '消息投递超时' },
  SERVICE_ERROR_C0230: { code: 'C0230', msg: '缓存服务超时' },
  SERVICE_ERROR_C0240: { code: 'C0240', msg: '配置服务超时' },
  SERVICE_ERROR_C0250: { code: 'C0250', msg: '数据库服务超时' },
  /**
   * 二级宏观错误码
   */
  SERVICE_ERROR_C0300: { code: 'C0300', msg: '数据库服务出错' },
  SERVICE_ERROR_C0311: { code: 'C0311', msg: '表不存在' },
  SERVICE_ERROR_C0312: { code: 'C0312', msg: '列不存在' },
  SERVICE_ERROR_C0321: { code: 'C0321', msg: '多表关联中存在多个相同名称的列' },
  SERVICE_ERROR_C0331: { code: 'C0331', msg: '数据库死锁' },
  SERVICE_ERROR_C0341: { code: 'C0341', msg: '主键冲突' },
  /**
   * 二级宏观错误码
   */
  SERVICE_ERROR_C0400: { code: 'C0400', msg: '第三方容灾系统被触发' },
  SERVICE_ERROR_C0401: { code: 'C0401', msg: '第三方系统限流' },
  SERVICE_ERROR_C0402: { code: 'C0402', msg: '第三方功能降级' },
  /**
   * 二级宏观错误码
   */
  SERVICE_ERROR_C0500: { code: 'C0500', msg: '通知服务出错' },
  SERVICE_ERROR_C0501: { code: 'C0501', msg: '短信提醒服务失败' },
  SERVICE_ERROR_C0502: { code: 'C0502', msg: '语音提醒服务失败' },
  SERVICE_ERROR_C0503: { code: 'C0503', msg: '邮件提醒服务失败' },
}
