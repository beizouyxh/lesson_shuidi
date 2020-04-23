import Taro, {  useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'
import { PostCard } from '../../components'

export default  function Index() {
  // hooks 第一个函数 
  // state  mutation  actions 
  // react hooks 让react 的 组件开发回到 函数的黄金时刻
  const [posts, setPosts] = useState([
    {
      title: "泰罗奥特曼",
      content: "泰罗是奥特之父和奥特之母唯一的亲生儿子。"
    }
  ]);
  // js 函数式编程很nice 
  // statelesscomponent  component 
  return (
    <View className="index">
      {
        posts.map((post) => (
          <PostCard 
            key={post.title}
            title={post.title}
            content={post.content}/>
        ))
      }
    </View>
  )
}

Index.config = {
  navigationBarTitleText = "首页"
}
博扬
