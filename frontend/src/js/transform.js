export default {
    /**
     * 本地坐标 转换为 服务器需要的数据格式
     */
    positionListToYinList(list,list2){
        let result = []
       for(let item of list){
           let x = item.x
           let y = item.y
           let t = `${list2[y]}|${x+1}`
           result.push(t)
       }
       return result
    },

    yinListToPosition(list,list2){
        let result = []
       for(let item of list){
          let array = item.split('|')
         
          let y = list2.indexOf(array[0])
          let x = parseInt(array[1])-1
        //   if(y==-1||x<0){
        //     continue
        //   }
          let t = {
              x,
              y
          }
          result.push(t)
       }
       return result
    },
    // 音乐数据转换为显示文本
    yinListToDisplayList(list,list2){
        let result = []
        for(let item of list){
           let array = item.split('|')
           let t = {
               titleX:parseInt(array[1])*0.25,
               titleY:array[0]
           }
           result.push(t)
        }
        return result
    },

    //下载文件
    downloadFile(res, fileName) {
        if (!res) {
            return
        }
        if (window.navigator.msSaveBlob) {  // IE以及IE内核的浏览器
            try {
                window.navigator.msSaveBlob(res, fileName)  // res为接口返回数据，这里请求的时候已经处理了，如果没处理需要在此之前自行处理var data = new Blob([res.data]) 注意这里需要是数组形式的,fileName就是下载之后的文件名
                // window.navigator.msSaveOrOpenBlob(res, fileName);  //此方法类似上面的方法，区别可自行百度
            } catch (e) {
                console.log(e)
            }
        } else {
            let url = window.URL.createObjectURL(new Blob([res]))
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', fileName)// 文件名
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link) // 下载完成移除元素
            window.URL.revokeObjectURL(url) // 释放掉blob对象
        }
    }
}