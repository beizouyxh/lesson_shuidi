
import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://pic.qqtn.com/up/2017-1/2017012718393730130.jpg"  /></div>
            <div className="author-introduction">
                  大三前端菜鸟
                {/* 分隔线组件 */}
                <Divider>社交账号</Divider>    
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
               

            </div>
        </div>
    )

}

export default Author