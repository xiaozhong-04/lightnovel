<template>
  <div class="box">
    <div class="titleline titles">
      <span class="tlle">女频推荐</span>
    </div>
    <div class="container">
      <!-- <div class="a"><h1>111</h1></div> -->
      <div class="b">
        <div class="b-head">
          <a href>
            <h3>现言</h3>
            <div class="covers">
              <img
                src="http://img-tailor.11222.cn/bcv/big/1106177695571.jpg"
                alt
                class="covers1"
              />
              <img
                src="http://img-tailor.11222.cn/bcv/big/201802061348363967.jpg"
                alt
                class="covers2"
              />
              <img
                src="http://img-tailor.11222.cn/bcv/big/201707250249595941.jpg"
                alt
                class="covers3"
              />
            </div>
          </a>
        </div>
        <div class="b-cenner">
          <ul>
            <li>
              <a href>古言</a>
            </li>
            <li>
              <i>1</i>
              <a href>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大秦小吏</a>
            </li>
            <li>
              <i>2</i>
              <a href>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名门娇宠</a>
            </li>
            <li>
              <i>3</i>
              <a href
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;兰寻馆探案疑录</a
              >
            </li>
          </ul>
        </div>
        <div class="b-mend">
          <div style="background-color: #f0fbed">
            <a href>种田</a>
          </div>
          <div style="background-color: #fbedfe">
            <a href>宅斗</a>
          </div>
          <div style="background-color: #edefff">
            <a href>总裁</a>
          </div>
          <div style="background-color: #eaf9f9">
            <a href>纯爱</a>
          </div>
        </div>
        <div class="b-foot">
          <div>
            <h4>热门标签</h4>
            <ul>
              <li>
                <a href>宫斗</a>
              </li>
              <li>
                <a href>女强</a>
              </li>
              <li>
                <a href>青春</a>
              </li>
              <li>
                <a href>女主仙侠</a>
              </li>
              <li>
                <a href>悬疑</a>
              </li>
              <li>
                <a href>婚恋</a>
              </li>
              <li>
                <a href>甜宠</a>
              </li>
              <li>
                <a href>民国</a>
              </li>
              <li>
                <a href>架空</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="c">
        <div class="c-left-page">
          <ul>
            <li v-for="item in topLeft" :key="item.id">
              <a :href="'/book/' + item.id">
                <img :src="item.novel_url" alt />
                <p>{{ item.novel_title }}</p>
              </a>
              <p class="author">
                <a :href="'/author/' + item.id">{{ item.novel_author }}</a>
              </p>
              <p class="desc">{{ item.novel_desc }}</p>
            </li>
          </ul>
        </div>
        <ul class="mend-right">
          <li v-for="item in topMiddleData" :key="item.id">
            <a :href="'/book/' + item.id">
              <span>{{ item.novel_classify }}</span>
              {{ item.novel_title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="d">
      <a href>
        <img
          src="http://img-tailor.11222.cn/pm/book/operate/2019061110463298.jpg"
          alt
        />
      </a>
    </div>
    <div class="lefteare">
      <div class="titleline">
        <span class="tlle2">精品热推</span>
      </div>
      <div class="booklist">
        <div v-for="item in topcenterData" :key="item.id">
          <a :href="'/book/' + item.id">
            <img :src="item.novel_url" alt />
            <p>{{ item.novel_title }}</p>
          </a>
          <p class="author">
            <a :href="'/author/' + item.id">{{ item.novel_author }}</a>
          </p>
          <p class="desc">{{ item.novel_desc }}</p>
        </div>
      </div>
    </div>
    <div class="righteare">
      <ul class="directory-top">
        <li>
          <h2>人气榜</h2>
        </li>
      </ul>
      <ul class="directory-bottom">
        <li @mouseover="changeNums(item)" v-for="item in array1" :key="item.id">
          <a :href="'/book/' + item.id">
            <p class="title">
              <i class="no">{{ item.id }}</i>
              {{ item.title }}
            </p>
          </a>
          <div class="info" v-show="item.currentEnce">
            <img :src="item.imgSrc" class="cover" />
            <a :href="'/author/' + item.id">
              <div class="auth">{{ item.auth }}</div>
              <div class="desc">{{ item.desc }}</div>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="newrec">
      <div class="titleline">
        <span class="tlle3">新书速推</span>
      </div>
      <div class="newbook-left">
        <div class="newbook-left-top">
          <a href>
            <p class="ap1">青春期妖怪</p>
          </a>
          <div class="side">
            <a href>
              <img
                src="http://img-tailor.11222.cn/bcv/big/1169557964189.jpg"
                alt
              />
            </a>
            <p class="author">
              <a href>飘灯</a>
            </p>
            <p>
              摇滚乐队主唱，阴郁冷酷的十六岁少年，与世界格格不入，他是妖怪。互联网公司的大佬，人工智能专业，海归精
            </p>
          </div>
        </div>
        <ul class="listrec">
          <li>
            <a href>
              <p class="_blank">老宅似花开</p>
            </a>
            <p class="auth">
              <a href>蘼芜君</a>
            </p>
            <p class="desc">
              陈一芳年过天命，一人担当起照顾生病爸爸的重任，某天爸爸却说要将战友馈赠的老宅留给自己。
              那一刻，她的兄弟姐妹们炸锅了，于是……
            </p>
          </li>
          <li>
            <a href>
              <p class="_blank">势不两立</p>
            </a>
            <p class="auth">
              <a href>总攻大人</a>
            </p>
            <p class="desc">
              文乔和宫徴羽离婚了，理由是她的调香师丈夫认为她这个妻子身上再也没有他喜欢的那个味道了。
              三年前文乔嫁给宫徴羽时，人人都道她是上辈子拯救了银河系才得到这般好姻缘，但只有她自己知道，
              她为爱情放弃事业，放弃自我，以宫徴羽为中心生活了三年，这三年婚姻生活带给她的，除了柴米油盐便是伤痕。
              离婚是好事，她和他离婚了
            </p>
          </li>
        </ul>
      </div>

      <div class="newbook-right">
        <div class="booklist">
          <div v-for="item in topfootData" :key="item.id">
            <a :href="'/book/' + item.id">
              <img :src="item.novel_url" alt />
              <p>{{ item.novel_title }}</p>
            </a>
            <p class="author">
              <a :href="'/author/' + item.id">{{ item.novel_author }}</a>
            </p>
            <p class="desc">{{ item.novel_desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d">
      <a href>
        <img
          src="http://img-tailor.11222.cn/pm/book/operate/2019061110463298.jpg"
          alt
        />
      </a>
    </div>
    <!-- 猜你喜欢———————————————————————————————————————————— -->
    <div class="guess">
      <div class="titleline titles">
        <span class="tlle tlle4">猜你喜欢</span>
      </div>
      <div class="booklist">
        <div v-for="item in topbottomData" :key="item.id">
          <a :href="'/book/' + item.id">
            <img :src="item.novel_url" alt />
            <p>{{ item.novel_title }}</p>
          </a>
          <p class="author">
            <a :href="'/author/' + item.id">{{ item.novel_author }}</a>
          </p>
          <p class="desc">{{ item.novel_desc }}</p>
        </div>
      </div>
    </div>
    <div class="d">
      <a href>
        <img
          src="http://img-tailor.11222.cn/pm/book/operate/2019061110472352.jpg"
          alt
        />
      </a>
    </div>

    <div class="update clearfix">
      <div class="lefteare">
        <div class="titlelines">
          <span class="tlle2">最新更新</span>
          <a href>
            <span class="but">查看全部</span>
          </a>
        </div>
        <ul class="list">
          <li class="th">
            <span>类型</span>
            <span>书本名称</span>
            <span>最新章节</span>
            <span>作者</span>
            <span>更新时间</span>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>透视小神农</span>
              <span>第两千三百七十八章 打问消息</span>
              <span>布凡</span>
              <span>7小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>洪荒神帝</span>
              <span>第2211章 天外有天</span>
              <span>三千道</span>
              <span>7小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>绝品小神农</span>
              <span>两千两百二十六章 拍卖会</span>
              <span>纯良有欲</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡野小仙农</span>
              <span>第一千二百五十二章 比打工强多了</span>
              <span>冬月十一</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>长生小农民</span>
              <span>668 四爻</span>
              <span>拼命五郎</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>恐怖惊悚</span>
              <span>鬼术大宗师</span>
              <span>第二千三百二十一章 所谓冥王</span>
              <span>黎照临</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>凌霄剑帝</span>
              <span>第三百九十三章 白虎裂天拳</span>
              <span>追逐时光</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村超级医圣</span>
              <span>第1582章 硬闯</span>
              <span>医僧</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>都市神级小道士</span>
              <span>第一千六百零二章 末世</span>
              <span>非常白</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>战争幻想</span>
              <span>铁血兵锋</span>
              <span>第0897章 我交东西</span>
              <span>妖妖灵</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村最强小神农</span>
              <span>第一千六百九十章 东天麟死</span>
              <span>龙腾青山</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>古典仙侠</span>
              <span>笑仙盗v</span>
              <span>第一二八章 分裂边缘</span>
              <span>寂静的雪</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>逆乱乾坤</span>
              <span>第一千五百零一章 遗迹</span>
              <span>浮云孤影</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>异界大陆</span>
              <span>剑逆诸天</span>
              <span>第一千一百六十九章 不想走，就战死在此地</span>
              <span>无情海</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>逆天神医</span>
              <span>第二千八百三十九章 仙蝶归来</span>
              <span>月亮不发光</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市热血</span>
              <span>最强保镖</span>
              <span>第二千四百八十四章 屠龙之战 下</span>
              <span>海洋</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村神医</span>
              <span>第2250章 果真是她</span>
              <span>七星</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>我的绝色总裁未婚妻</span>
              <span>第3492章 巫妖大劫</span>
              <span>花幽山月</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>山村最强小农民</span>
              <span>第2018章 养料</span>
              <span>善良的面具</span>
              <span>11小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>传统武侠</span>
              <span>武榜三十六</span>
              <span>第一百六十八章 玉佩</span>
              <span>殇笔梦溪</span>
              <span>11小时前</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="righteare">
        <ul class="directory-top">
          <li>
            <h2>版权推荐</h2>
          </li>
        </ul>
        <ul class="directory-bottom">
          <li @mouseover="changeNum(item)" v-for="item in array" :key="item.id">
            <a :href="'/book/' + item.id">
              <p class="title">
                <i class="no">{{ item.id }}</i>
                {{ item.title }}
              </p>
            </a>
            <div class="info" v-show="item.currentEnce">
              <img :src="item.imgSrc" class="cover" />
              <a :href="'/author/' + item.id">
                <div class="auth">{{ item.auth }}</div>
                <div class="desc">{{ item.desc }}</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          id: 1,
          title: "流星旅人",
          currentEnce: true,
          auth: "西南花",
          desc:
            "蒋思佳只想当一名小记者，追求理想，宣扬正义。然而她怎么也没有料到，“家破人亡”",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1123517656380.jpg"
        },
        {
          id: 2,
          title: "脸盲嫡女的宅斗日常",
          currentEnce: false,
          desc:
            "林芝芝两世为人，容貌身份有变。唯一不变的是脸盲症加亲戚恐惧症。苍天啊，谁来告诉她",
          auth: "绯语",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1108697447355.jpg"
        },
        {
          id: 3,
          title: "云想衣裳",
          currentEnce: false,
          desc:
            "惊：小裁缝娘本想安静如鸡的做做汉服，却被大胡子男人盯上，三番五次对她……进行惨无，",
          auth: "沐轶",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1115247660875.jpg"
        },
        {
          id: 4,
          title: "热靴小姐",
          currentEnce: false,
          desc:
            "邹晗：你好像夹心硬糖。表面硌牙，内心柔软。程舒：这么说你想含一颗？",
          auth: "立风",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1102747794721.jpg"
        },
        {
          id: 5,
          title: "隔壁住着龙",
          currentEnce: false,
          desc:
            "凌楠意外发现新公司的董事长韩商陆与两年前过世的未婚夫重越长得一模一样，同时韩商陆",
          auth: "成骨为衣",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201808091024125261.jpg"
        },
        {
          id: 6,
          title: "皇后她每天都想弑君",
          currentEnce: false,
          desc:
            "一次刺杀醒来之后，君宸发现自己和皇后互换了身体。君宸去和沉柒月理论，却发现两",
          auth: "然兮",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1130617794377.jpg"
        },
        {
          id: 7,
          title: "美玉良缘",
          currentEnce: false,
          desc:
            "沈玉今生所做的一切，全为秦良玉画地为牢，以爱囚之。秦良玉爱上了别的男子，沈玉替她",
          auth: "九福",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1156797465987.jpg"
        },
        {
          id: 8,
          title: "许爱国向北看",
          currentEnce: false,
          desc:
            "一次偶然的机会，江州大学软件工程学院的萧逸闲得到了星界辅助系统幺幺零，幺幺零默默",
          auth: "静夜寄思",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1141637440489.jpg"
        },
        {
          id: 9,
          title: "考官，求pass",
          currentEnce: false,
          desc:
            "H市又在下大雨。但是在雅思口语考场内，刚结束面试，潇洒关掉录音笔的帅气考官笑得却",
          auth: "了了一生",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201805141642268039.jpg"
        },
        {
          id: 10,
          title: "泡芙先生",
          currentEnce: false,
          desc:
            "一开始他只是单纯的想吃甜品，后来他爱上了生活中的这份甜蜜。没想到，最后，他爱上了",
          auth: "艾特沃特",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1112127845926.jpg"
        }
      ],
      array1: [
        {
          id: 1,
          title: "诱妻入怀：帝少心尖宠",
          currentEnce: true,
          auth: "诺小颖",
          desc:
            " 那夜，他对她的感情越发浓厚，只想宠她上天。前男友嫌她出身低微，所以就分手另寻富家",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1135227736338.jpg"
        },
        {
          id: 2,
          title: "总裁的秘密",
          currentEnce: false,
          desc:
            "大学毕业、相亲、裸婚，舒苏以为接下来的日子就是攒钱买房，怀孕生子，结果却发现那个",
          auth: "苏幕丶",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201804101519109645.jpg"
        },
        {
          id: 3,
          title: "重生八零：媳妇有点辣",
          currentEnce: false,
          desc:
            "PS：新书《科举逆袭：最强女首辅》已发布！//父母早逝，家境贫寒，姿色平平，夏晓，",
          auth: "宝妆成",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1138907411714.jpg"
        },
        {
          id: 4,
          title: "福地甜园：拐个王爷好种田",
          currentEnce: false,
          desc:
            "一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。我的生活我做",
          auth: "长白山上的雪",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1130867089610.jpg"
        },
        {
          id: 5,
          title: "农女致富记",
          currentEnce: false,
          desc:
            "这就是一个农女穿越、带娃、种田、买房、买车的致富记。从吃不饱到吃的饱再到地主的创",
          auth: "秦喜儿",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1116406925386.jpg"
        },
        {
          id: 6,
          title: "鬼医毒妃：嫁个绝色小相公",
          currentEnce: false,
          desc:
            "紫千歌，华夏顶尖医学天才，灵魂重生在圣天大陆。医师，毒师，炼丹师，炼器师，阵法师",
          auth: "拓拔言倾",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201812261738267031.jpg"
        },
        {
          id: 7,
          title: "99亿闪婚：豪门总裁夜夜忙",
          currentEnce: false,
          desc:
            "她二十年一次脚下失足，撞了他的豪车，留下签名和号码，走的不带一片云彩。不仅如此，",
          auth: "花木",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1119487363143.jpg"
        },
        {
          id: 8,
          title: "少帅：你老婆又要逃婚了",
          currentEnce: false,
          desc:
            "不就是想要好好的游个泳吗，怎么就穿到了民国，穿就穿呗，还成了京北少帅府的里的少夫",
          auth: "林萧墨",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1149297865356.jpg"
        },
        {
          id: 9,
          title: "春闺秘录：厂公太撩人",
          currentEnce: false,
          desc:
            "      生于簪缨之家，嫁与名望世族。      生前富贵尽享，死后荣显加身。",
          auth: "平白兄",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1132447004793.jpg"
        },
        {
          id: 10,
          title: "农女珍珠的悠闲生活",
          currentEnce: false,
          desc:
            "四体不勤五谷不分，却成了农家女娃。群山延绵水丰山秀，可家贫屋陋。爹憨实娘哑巴弟体，",
          auth: "千墨",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1143247091650.jpg"
        }
      ],
      topLeft: [],
      topMiddleData: [],
      topcenterData: [],
      topfootData: [],
      topbottomData: []
    };
  },
  methods: {
    changeNum(item) {
      this.array.forEach(item => {
        item.currentEnce = false;
      });
      item.currentEnce = true;
    },
    changeNums(item) {
      this.array1.forEach(item => {
        item.currentEnce = false;
      });
      item.currentEnce = true;
    },
    // 请求 顶部左边3条数据
    async getTopLeftData() {
      const { data } = await this.$http("/designation?id1=14,18,19");
      this.topLeft = data.data;
    },
    async getTopMiddleData() {
      const { data } = await this.$http(
        "/novels?type=0&sortway=desc&per_page=19&sz=0"
      );
      this.topMiddleData = data.data;
    },
    async getTopcenterData() {
      const { data } = await this.$http("/novels?type=1&per_page=9&status=0");
      this.topcenterData = data.data;
    },
    async getTopfootData() {
      const { data } = await this.$http("/novels?type=0&per_page=9&status=0");
      this.topfootData = data.data;
    },
    async getTopbottomData() {
      const { data } = await this.$http("/novels?type=5&per_page=8&status=0");
      this.topbottomData = data.data;
    }
  },
  created() {
    // 调用请求方法 获取顶部左边3条数据
    this.getTopLeftData();
    this.getTopMiddleData();
    this.getTopcenterData();
    this.getTopbottomData();
    this.getTopfootData();
  }
};
</script>
<style scoped>
* {
  font-family: Microsoft YaHei;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.titles {
  margin-bottom: 20px;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
  border: none;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.box {
  width: 1120px;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
}
.container {
  width: 100%;
  height: 100%;
}
.a {
  float: left;
  width: 77.85%;
  height: 212px;
  background-color: #fbeff5;
  margin-bottom: 20px;
}
.b {
  float: right;
  width: 19.46%;
  height: 100%;
  overflow: hidden;
}
.d img {
  width: 100%;
  height: 110px;
}
.b-head {
  height: 93px;
  background-color: #fcf0f6;
  margin-bottom: 3px;
}
.b-head h3 {
  font-size: 14px;
  padding-top: 16px;
  margin-left: 15px;
  line-height: 14px;
}
.b-cenner {
  height: 155px;
  background-color: #fcf0f6;
  margin-bottom: 3px;
}
.b-cenner ul li {
  width: 100%;
  box-sizing: border-box;
  padding-left: 26px;
  height: 35px;
  line-height: 43px;
  position: relative;
  overflow: hidden;
}
a {
  color: black;
}
a:hover {
  color: #ff8e15;
}
.b-cenner ul li:first-child {
  color: black;
  font-size: 16px;
  font-weight: bolder;
}
.b-cenner ul li i {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f36f20;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 25;
  top: 13px;
  font-style: normal;
  line-height: 21px;
}
.b-mend {
  height: 108px;
  margin-bottom: 3px;
}
.b-mend {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 52px 52px;
  grid-gap: 3px;
  height: 22%;
  margin-bottom: 3px;
  text-align: center;
  line-height: 66px;
}
.b-foot {
  height: 130px;
  background-color: #fef1f0;
  padding-top: 15px;
  margin-bottom: 20px;
}
.b-foot h4 {
  font-size: 14px;
  line-height: 16px;
  height: 32px;
  color: #f47a33;
  top: 20px;
}
.b-foot div {
  width: 70%;
  height: 80%;
  margin-left: 30px;
}
.b-foot ul li {
  font-size: 12px;
  line-height: 6px;
  padding: 3px 8px;
  border-right: 1px solid #fcd6c6;
  float: left;
  margin-bottom: 12px;
}
.b-foot ul li a {
  color: #f47a33;
}
.c {
  float: left;
  width: 77.85%;
}
.c-left-page {
  float: left;
  width: 300px;
}
.c-left-page ul li {
  position: relative;
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20;
  overflow: hidden;
}
.c-left-page ul li img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.c-left-page ul li a {
  text-decoration: none;
  color: inherit;
}
.c-left-page ul li a p {
  margin-top: 9px;
}
.c-left-page ul li p.author {
  color: rgb(163, 163, 163);
  margin: 12px 0px 30px;
}
.c-left-page ul li p.desc {
  color: rgb(163, 163, 163);
  line-height: 20px;
  height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.mend-right {
  float: right;
  width: 480px;
}
.mend-right li {
  float: left;
  width: 240px;
  height: 40px;
  font-size: 15px;
  line-height: 18px;
  margin-top: 8px;
  font-size: 18px;
  display: -webkit-box;
  overflow: hidden;
}
.mend-right span {
  color: #a0a1a1;
}

.covers {
  height: 68px;
  float: right;
  position: relative;
}
.covers1 {
  width: 52px;
  height: 64px;
  right: 0px;
  z-index: 1;
  position: relative;
}
.covers2 {
  width: 55px;
  height: 68px;
  right: 17px;
  z-index: 2;
  position: relative;
  top: -5px;
}
.covers3 {
  width: 52px;
  height: 64px;
  right: 39px;
  z-index: 1;
  position: relative;
}

.lefteare {
  width: 74%;
  float: left;
  height: 100%;
  margin-top: 30px;
}
.booklist {
  width: 100%;
  text-align: justify;
  margin-top: 21px;
}
.booklist div {
  width: 265px;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20;
  overflow: hidden;
  margin-right: 6px;
}
.booklist div img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.cover {
  height: 100%;
  width: 82px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eee;
}
.desc {
  height: 66px;
  line-height: 22px;
  font-size: 12px;
  color: #999;
  text-align: justify;
  margin-top: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.auth {
  width: 100%;
  overflow: hidden;
  height: 14px;
  line-height: 14px;
  color: #999999;
  margin-top: 10px;
}
.no {
  color: #fff;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  background-color: #d2d2d2;
  font-style: normal;
}
li:nth-child(1) i.no,
li:nth-child(2) i.no,
li:nth-child(3) i.no {
  background-color: #ff5e79;
}
p.title {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 24px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.booklist div a {
  text-decoration: none;
  color: inherit;
}
.booklist div a p {
  margin-top: 9px;
}
.booklist div a:hover {
  color: #ff8e15;
}
.booklist div p.author {
  color: rgb(163, 163, 163);
  margin: 12px 0px 30px;
}
.booklist div p.desc {
  color: rgb(163, 163, 163);
  line-height: 20px;
  height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.righteare {
  margin-top: 30px;
  width: 274px;
  float: right;
}
.directory-top {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: flex;
  border-bottom: 4px solid #ff5e79;
  text-align: center;
  color: #1d1e20;
}
.directory-bottom {
  width: 100%;
  margin-top: 20px;
}
.directory-bottom li {
  line-height: 18px;
  margin-bottom: 16px;
  color: #1d1e20;
  font-size: 13px;
}
.info {
  width: 100%;
  height: 103px;
  position: relative;
  box-sizing: border-box;
  padding-left: 92px;
  margin-top: 10px;
  overflow: hidden;
}

.newrec {
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
}
.newbook-left {
  margin-top: 20px;
  width: 268px;
  float: left;
  background-color: #fcf0f6;
}
.newbook-left-top {
  width: 100%;
  height: 161px;
  box-sizing: border-box;
  padding: 28px 24px 0;
  background: url("/img/nv_left_bg_1.png") repeat-x;
  color: #1d1e20;
  position: relative;
}
.ap1 {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  overflow: hidden;
  height: 18px;
}
.side {
  height: 94px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 24px;
  font-size: 14px;
}
.side img {
  float: left;
  height: 100%;
  width: 82px;
}
.side .author {
  height: 14px;
  line-height: 14px;
  margin: 17px 0 12px;
  white-space: nowrap;
  width: 128px;
  float: right;
  overflow: hidden;
  color: #a9a9a9;
}
.side p {
  line-height: 20px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 128px;
  float: right;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #a9a9a9;
}

.newbook-right {
  width: 73.04%;
  float: right;
  margin-bottom: 30px;
}

.titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.titleline:before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: #fcf0f6;
  margin-top: 9px;
}
.tlle {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("/img/nv_icon_girl.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}
.tlle2 {
  padding: 0 18px 0 14px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("/img/nv1_icon_cate.png") no-repeat 0 0 #fff;
  background-size: auto 22px;
}
.tlle3 {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("/img/title_icon_new3.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}
.tlle4 {
  background: url("/img/title_icon_like4.png") no-repeat 18px 0 #fff;
}
.listrec {
  overflow: hidden;
  color: #1c0800;
  width: 218px;
  margin: 0 auto;
}
.listrec li {
  width: 100%;
  height: 120px;
  margin-top: 27px;
  box-sizing: border-box;
  padding-left: 12px;
  border-left: 4px solid #d3d1d5;
  position: relative;
}
._blank {
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.auth {
  color: #757575;
  margin: 7px 0 7px;
}
.desc {
  font-size: 12px;
  line-height: 20px;
  height: 60px;
  color: #757575;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.guess {
  margin: 0 auto;
  height: 375px;
  margin-top: 30px;
}
.update {
  width: 100%;
  margin-top: 20px;
  height: 930px;
}
.titlelines {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.but {
  float: right;
  text-indent: 0;
  height: 100%;
  width: 82px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  border: 1px solid #f37315;
  border-radius: 4px;
  color: #f37315;
}
.list li:first-child {
  color: #000;
  border-bottom: 2px solid #c6c6c6;
}
.list li {
  color: #a9a9a9;
  border-bottom: 1px #c6c6c6 dashed;
  overflow: hidden;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
}
.list li span {
  display: inline-block;
}
.list li span:nth-child(1) {
  margin-left: 5px;
  width: 7%;
}
.list li span:nth-child(2) {
  width: 25%;
}
.list li span:nth-child(3) {
  width: 37%;
  margin: 0 5px;
}
.list li span:nth-child(4) {
  width: 15%;
}
.list li span:nth-child(5) {
  width: 14%;
}
.list li a span {
  color: #a9a9a9;
}
.list li a span:hover {
  color: #ff8e15;
}
</style>
