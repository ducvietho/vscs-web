<template>
  <div>
    <div class="header">
      <div id="myMenu">
        <a href="#" class="logo">VSCS</a>
        <div class="navigate-container" id="myNavigate">
          <a href="#intro" @click="clickNavigator()">VSCS</a>
          <a href="#system" @click="clickNavigator()">System</a>
          <a href="#why" @click="clickNavigator()">Why</a>
          <a href="#how"  @click="clickNavigator()">How</a>
          <a href="#vision" @click="clickNavigator()">Vision</a>
          <a href="#motion" @click="clickNavigator()">Motion</a>
        </div>
        <a href="javascript:void(0);" class="icon" @click="clickNavigator()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
    <div>
      <nav id="intro">
        <div class="intro-content" >
          <div class="logo-container" data-aos="fade-top">
            <img src="../assets/images/mobile/logo_vscs.png">
            <p>
              VSCSとは、Webカメラから表情を認識し、スペースにモデルをロードし、WebRTCで通信するリモートコミュニケーションツールです。ZOOMやSlackだけでは満たせなかった超低遅延コミュニケーションによる、連携の改善あああああああああああああああああああ
            </p>
          </div>
          <div class="infor" data-aos="fade-top">
            <img src="../assets/images/desktop/img_mv.png">
            <p>※開発中のためイメージは実物と異なります</p>
          </div>
        </div>
      </nav>
      <nav id="system">
        <div class="system-container">
          <div class="title-container" data-aos="fade-top">
            <p class="txt-title">SYSTEM</p>
            <p class="txt-des">WebRTCによる通信</p>
          </div>
          <img src="../assets/images/desktop/img_system.png" data-aos="fade-top">
          <div class="infor-container">
            <div class="webrtc-content" data-aos="fade-top">
              <img src="../assets/images/desktop/img_webrtc.png">
              <p>WebRTCサーバでモーションデータや音声データをやり取りしているあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
            <div class="company-content" data-aos="fade-top">
              <img src="../assets/images/desktop/image_shizu.png">
              <p>特許技術瀝式を利用し、高速な通信をサポートしているああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </div>
        </div>
      </nav>
      <nav id="why">
        <div class="why-container" >
          <div class="title-container" data-aos="fade-top">
            <p class="txt-title">WHY</p>
            <p class="txt-des">なぜ バーチャルコミュニケーション なのか</p>
          </div>
          <div class="content-container" data-aos="fade-top">
            <p>通常のカメラ映像では、片付いていない部屋等の不要な情報が映り、悪意のある者による不適切な画像も送信できてしまう。</p>
            <p>通常のビデオ会議システムは、平面の合成となるため現実世界と乖離が大きく、「席が隣」等の一般的な空間が表現しにくい。</p>
            <p>カメラ映像は画質が良くなる程データ容量が多くなってしまうため、4K等の高画質に対応するには膨大な回線容量が必要になる。</p>
          </div>
          <p class="txt-summary" data-aos="fade-top">バーチャルコミュニケーションなら、伝えたい表情のみをやり取りするためセキュリティが高く、お化粧もバーチャル背景も不要です。3次元空間を基本とするため現実世界に近いコミュニケーションを自然に実現でき、かつ少ないデータ容量でありながら、高解像度で描画することが可能です。</p>
        </div>
      </nav>
      <nav id="how">
        <div class="how-container">
          <div class="title-container" data-aos="fade-top">
            <p class="txt-title">HOW</p>
            <p class="txt-des">手軽に利用可能</p>
          </div>
          <div class="infor-container">
            <div class="item" data-aos="fade-top">
              <div class="only-container">
                <span class="txt-only">only</span>
                <img src="../assets/images/desktop/img_only.png">
              </div>
              <p>Webサイトにアクセスすれば、Webカメラだけで始められる！</p>
            </div>
            <div class="item" data-aos="fade-top">
              <img src="../assets/images/desktop/icon_env.png">
              <p>専用アプリやVRデバイスは不要です</p>
            </div>
          </div>
        </div>
      </nav>
      <nav id="vision">
        <div class="vision-container">
          <div class="title-container" data-aos="fade-top">
            <p class="txt-title">VISION</p>
            <p class="txt-des">VSCSが目指すもの</p>
          </div>
          <div class="item-container" data-aos="fade-top">
            <img src="../assets/images/desktop/icon_VISION_01.png">
            <span>本製品の制作を通して、WebRTC等の通信部品、顔認識、3Dモデル操作等の技術要素への知見を蓄積し、各種案件への展開を目指す</span>
          </div>
          <div class="item-container" data-aos="fade-top">
            <img src="../assets/images/desktop/icon_VISION_02.png">
            <span>一般ユーザ向けのリリースは目指しておらず、社内利用や受託開発での基本部品として利用する</span>
          </div>
          <div class="item-container" data-aos="fade-top">
            <img src="../assets/images/desktop/icon_VISION_03.png">
            <span>本製品から派生して開発する事で、素早い受託開発業務を実現</span>
          </div>
          <div class="item-container" data-aos="fade-top">
            <img src="../assets/images/desktop/icon_VISION_04.png">
            <span>基本的に海外も含めてリモートワークとなる東雲火山内の業務で活用する事で、社内のコミュニケーション促進に役立てる</span>
          </div>
        </div>
      </nav>
      <nav id="motion">
        <div class="motion-container">
          <div class="title-container" data-aos="fade-top">
            <p class="txt-title">MOTION</p>
            <p class="txt-des">動作の様子</p>
          </div>
          <youtube width="100%" :video-id="videoId" ref="youtube" height="180" data-aos="fade-top"></youtube>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
  export default {
    name: "LandingMobile",
    data() {
      return {
        videoId:'NSXYHus8mSk'
      }
    },
    methods: {
      handleScroll() {
        let header = document.getElementById("myMenu");
        let sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      },
      clickNavigator() {
        var x = document.getElementById("myNavigate");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" scoped>
  img {
    max-width: 100%;
  }
  .sticky {
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 100;
  }

  .header {
    width: 100%;
    background-color: white;
    a {
      margin-right: 15px;
      font-family: "Hiragino Kaku";
      font-size: 15px;
      color: black;
      display: block;
    }
    .navigate-container {
      display: none;
      background: black;
      a {
        color: white;
        background: black;
        margin: 0px;
        padding: 0.5rem 1rem;
      }

    }
    .icon {
      margin: 0px;
      position: absolute;
      right: 1rem;
      top: 0.5rem;
    }
    .logo {
      padding: 0.5rem 1rem;
    }
  }
  .title-container {
    position: relative;
    text-align: center;
    .txt-title {
      font-family: "Apple SD Gothic Neo";
      font-weight: bold;
      color: #E5E5E5;
      font-size: 80px;
      padding: 0px;
      margin: 0px;
    }
    .txt-des {
      position: absolute;
      bottom: 29%;
      font-size: 20px;
      font-family: "Hiragino Kaku";
      font-weight: bold;
      color: #000000;
      width: 100%;
    }
  }
  .intro-content {
    background-image: url(../assets/images/desktop/ic_intro.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 20px;
    .logo-container {
      text-align: center;
      p {
        margin-top: 20px;
        font-size: 15px;
        font-family: "Hiragino Kaku";
        color: #F7F7F7;
        text-align: left;
      }
    }
    .infor {
      img {
        margin-top: 10px;
      }
      p {
        margin-top: 10px;
        text-align: right;
        color: #FFFFFF;
        font-size: 12px;
        font-family: "Hiragino Kaku";
      }
    }
  }
  .system-container {
    background-image: url(../assets/images/desktop/system_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 51px 20px 90px 20px;
    text-align: center ;
    .infor-container {
      margin-top: 45px;

      p {
        text-align: left;
        margin-top: 20px;
        word-break: break-word;
        font-family: "Hiragino Kaku";
        font-size: 16px;
        color: #000000;
      }
      .webrtc-content {
        p {
          margin-bottom: 30px;
        }
      }
    }
  }

  .why-container {
    background-image: url(../assets/images/desktop/why_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000;
    padding: 51px 20px 90px 20px;
    background-position-x: 40%;
    .txt-title {
      color: #4D4D4D;
    }
    .txt-des {
      color: #FFFFFF;
      bottom: 7%;
    }
    p {
      color: #FFFFFF;
      font-size: 16px;
      font-family: "Hiragino Kaku";
    }
    .content-container {
      margin-bottom: 20px;
      p {
        color: #FFFFFF;
        font-size: 16px;
        flex: 1;
        font-family: "Hiragino Kaku";
      }
    }
    .txt-summary {
      padding: 15px 20px;
      border: 1px #707070 solid;
    }
  }

  .how-container {
    background-image: url(../assets/images/desktop/how_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 51px 20px 90px 20px;
    background-position-x: 26%;
    .txt-title {
      color: #888888;
    }
    .txt-des {
      color: #FFFFFF;
    }
    .infor-container {
      .item {
        text-align: center;
        p {
          margin-top: 5px;
          font-size: 16px;
          font-family: "Hiragino Kaku";
          color: white;
          padding: 0px 20px;
        }
        .only-container {
          position: relative;
          .txt-only {
            position: absolute;
            top: 50%;
            left: 16%;
            transform: translateY(-50%);
            color: white;
            font-size: 31px;
            font-family: "Apple SD Gothic Neo";
          }
        }
      }

    }
  }

  .vision-container {
    background-image: url(../assets/images/desktop/vision_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 51px 20px 90px 20px;
    .item-container {
      position: relative;
      margin-top: 20px;
      img {
        margin-right: 15px;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      span {

        font-family: "Hiragino Kaku";
        font-size: 16px;
        color: #000000;
        display: inline-block;
        margin-left: 70px;
      }
      &:nth-child(1) {
        margin-top: 0px;
      }
    }
  }
  .motion-container {
    background-image: url(../assets/images/desktop/motion_bg.png);
    background-repeat: no-repeat;
    background-color: #000000;
    background-size: cover;
    background-position-x: 40%;
    padding: 51px 20px 90px 20px;

    .txt-title {
      color: #4D4D4D;
    }
    .txt-des {
      color: #FFFFFF;
    }
  }
</style>
