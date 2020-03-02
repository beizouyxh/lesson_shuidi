export const login = async(data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 'ok',
                message: '登录成功'
            })
        }, 1000)
    })
}