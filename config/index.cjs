/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe8dea72de3685dd8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '51a5b50b5f411766decc5201650612a7',



  USERS: [
    {
      // 想要发送的人的名字
      name: '昶',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o8aHm6Dr4Avbooco0fG1z9i0IqEg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '5zPwuxGWkOiCtofm8NYYpQ9xwTbB-lk5AuVoZY_vRNI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-08',
      province: '山西',
      city: '太原',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { type: '生日', name: '昶', year: '2004', date: '05-08', },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-28' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '欣',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o8aHm6EICez0tFxty-APCKwMzDCs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'BDEwoG8tQvGXgEaqCVcUUZhPXvj_Wy_fxAAMlyoyubY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-11',
      province: '江苏',
      city: '苏州',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { type: '生日', name: '欣', year: '2003', date: '08-11', },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2011-09-11' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Misrc4H7Zl_vFmafwjnYlukZYdWci9M6APcuVW9CcRM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o8aHm6ONizJUDfrgUoVjvepoaJEY',
    }
  ],

}

module.exports = USER_CONFIG

