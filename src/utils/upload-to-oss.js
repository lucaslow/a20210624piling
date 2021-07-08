'use strict'

const OSS = require('ali-oss')
/*
 ** 上传OSS组件
 ** options：region 、 accessKeyId 、 accessKeySecret（oss账号信息）
 ** options: dirName（上传的文件夹地址）
 ** options: type（上传的文件类型）
 */

class UploadFile {
  constructor(options) {
    this.region = options.region || process.env.VUE_APP_OSS_REGION
    this.accessKeyId =
      options.accessKeyId || process.env.VUE_APP_OSS_ACCESSKEYID
    this.accessKeySecret =
      options.accessKeySecret || process.env.VUE_APP_OSS_ACCESSKEYSECRET
    this.bucket = options.bucket || process.env.VUE_APP_OSS_BUCKET

    this.fileName = Math.random()
      .toString(36)
      .substring(2) // 生成文件名标识符

    options.file && (this.file = options.file)
    // 上传的oss文件夹名称
    this.dirName = 'h5'
    options.dirName && (this.dirName = options.dirName)

    options.type ? (this.type = options.type) : (this.type = 'png') // 上传的oss文件格式

    this.ossClient = new OSS({
      region: this.region,
      accessKeyId: this.accessKeyId,
      accessKeySecret: this.accessKeySecret,
      bucket: this.bucket
    })
    this.imgData = {}
  }
  /* 文件形式 上传 */
  async uploadByFile(file) {
    const result = await this.ossClient.put(
      `/${this.dirName}/${this.fileName}.${this.type}`,
      file
    )
    return result
  }
  async uploadByBase64(base64) {
    const filename = `${this.fileName}}.${this.type}`
    const imageFile = await this.dataURLtoFile(base64, filename)
    const result = await this.uploadByFile(imageFile)
    return result.res
  }
  /* base64 转成 file文件 */
  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    // 转换成file对象
    return new File([u8arr], filename, { type: mime })
  }
}

// module.exports = UploadFile
export default UploadFile
