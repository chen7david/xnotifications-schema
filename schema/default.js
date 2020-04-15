const Schema = require('./../classes/Schema')

const schema = new Schema()

schema.create('unknown', {
    en: (code) =>`unknown error, something went wrong - ER${code}`,
    zh: (code) =>`服务器有误 - ER${code}`,
})

schema.create('undefinded', {
    en: (noun) =>`${noun} is not definded`,
    zh: (noun) =>`${noun}未被定义`,
})

schema.create('invalid', {
    en: (noun) =>`invalid ${noun}!`,
    zh: (noun) =>`${noun}格式有误`,
})

schema.create('incomplete', {
    en: (noun) =>`incomplete ${noun}!`,
    zh: (noun) =>`${noun}未完成`,
})

schema.create('completed', {
    en: (noun) =>`completed ${noun}!`,
    zh: (noun) =>`${noun}完成`,
})

schema.create('incorrect', {
    en: (noun) =>`incorrect ${noun}!`,
    zh: (noun) =>`${noun}不正确`,
})

schema.create('expired', {
    en: (noun) =>`expired ${noun}!`,
    zh: (noun) =>`${noun}过期了`,
})

schema.create('forbidden', {
    en: (noun) =>`forbidden ${noun}!`,
    zh: (noun) =>`${noun}禁止`,
})

schema.create('duplicate', {
    en: (noun) => `${noun} is already in use!`, 
    zh: (noun) => `${noun}已被占用`,
})

schema.create('required', {
    en: (noun) =>`${noun} required!`,
    zh: (noun) =>`要求${noun}`,
})

schema.create('login', {
    en: (noun) =>`welcome back ${noun}!`,
    zh: (noun) =>`欢迎${noun}`,
})

schema.create('logout', {
    en: (noun) =>`doodbye ${noun}, hope to see you again soon!`,
    zh: (noun) =>`再见${noun}, 希望很快能再见`,
})

schema.create('verified', {
    en: (noun) =>`${noun} verification complete!`,
    zh: (noun) =>`${noun}验证成功!`,
})

schema.create('verification_required', {
    en: (noun) =>`${noun} verification incomplete!`,
    zh: (noun) =>`${noun}验证未完成`,
})

schema.create('custom', {
    en: (noun) =>`${noun}`,
    zh: (noun) =>`${noun}`,
})

// CRUD

schema.create('created', {
    en: (noun) =>`successfully created new ${noun}!`,
    zh: (noun) =>`新${noun}创建成功！`,
})

schema.create('create_failed', {
    en: (noun) =>`faild to create new ${noun}!`,
    zh: (noun) =>`新${noun}创建失败！`,
})

schema.create('updated', {
    en: (noun) =>`successfully updated ${noun}!`,
    zh: (noun) =>`${noun}信息更新成功`,
})

schema.create('update_faild', {
    en: (noun) =>`faild to update ${noun}!`,
    zh: (noun) =>`${noun}信息更新失败`,
})

schema.create('deleted', {
    en: (noun) =>`successfully deleted ${noun}!`,
    zh: (noun) =>`${noun}删除成功`,
})

schema.create('delete_faild', {
    en: (noun) =>`faild to delete ${noun}!`,
    zh: (noun) =>`${noun}删除失败`,
})

module.exports = schema.export()