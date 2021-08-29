<template>
  <div>
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light" id="myMenu">
        <div class="menu-container">

          <scrollactive class="menu-custom">
            <ul class="nav">
              <li>
                <a href="#intro" class="scrollactive-item" >
                  VSCS
                </a>
              </li>
              <li>
                <a href="#system" class="scrollactive-item" >
                  System
                </a>
              </li>
              <li>
                <a href="#why" class="scrollactive-item" >
                  Why
                </a>
              </li>
              <li>
                <a href="#how" class="scrollactive-item">
                  How
                </a>
              </li>
              <li>
                <a href="#vision" class="scrollactive-item">
                  Vision
                </a>
              </li>
              <li>
                <a href="#motion" class="scrollactive-item">
                  Motion
                </a>
              </li>
            </ul>
          </scrollactive>
        </div>
      </nav>
    </div>
    <div>
      <nav id="intro">
        <div class="intro-content" >
          <div class="logo-container" data-aos="fade-right">
            <img src="../assets/images/desktop/logo_vscs.png">
            <p>
              VSCSとは、Webカメラから表情を認識し、スペースにモデルをロードし、WebRTCで通信するリモートコミュニケーションツールです。ZOOMやSlackだけでは満たせなかった超低遅延コミュニケーションによる、連携の改善あああああああああああああああああああ
            </p>
          </div>
          <div class="infor" data-aos="fade-left">
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
            <div class="webrtc-content" data-aos="fade-right">
              <img src="../assets/images/desktop/img_webrtc.png">
              <p>WebRTCサーバでモーションデータや音声データをやり取りしているあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
            <div class="company-content" data-aos="fade-left">
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
            <div class="item" data-aos="fade-right">
              <div class="only-container">
                <span class="txt-only">only</span>
                <img src="../assets/images/desktop/img_only.png">
              </div>
              <p>Webサイトにアクセスすれば、Webカメラだけで始められる！</p>
            </div>
            <div class="item" data-aos="fade-left">
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
          <youtube width="100%" :video-id="videoId" ref="youtube" height="600" data-aos="fade-top"></youtube>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
  export default {
    name: "LandingPC",
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
  }
  .nav {
    a {
      margin-right: 15px;
      font-family: "Hiragino Kaku";
      font-size: 15px;
      color: black;
    }
  }
  .title-container {
    position: relative;
    text-align: center;
    .txt-title {
      font-family: "Apple SD Gothic Neo";
      font-weight: bold;
      color: #E5E5E5;
      font-size: 158px;
      padding: 0px;
      margin: 0px;
    }
    .txt-des {
      position: absolute;
      bottom: 39%;
      font-size: 37px;
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
    background-color: #000000;
    padding: 40px 15% 0px 15%;
    display: flex;
    .logo-container {
      flex: 1;
      margin-right: 60px;
      img {
        margin-top: 58px;
      }
      p {
        margin-top: 40px;
        font-size: 16px;
        font-family: "Hiragino Kaku";
        color: #F7F7F7;
      }
    }
    .infor {
      flex: 2;
      p {
        margin-top: 10px;
        text-align: right;
        color: #FFFFFF;
        font-size: 14px;
        font-family: "Hiragino Kaku";
      }
    }
  }
  .system-container {
    background-image: url(../assets/images/desktop/system_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 71px 22% 110px 22%;
    text-align: center ;
    .infor-container {
      display: flex;
      margin-top: 45px;
      .webrtc-content {
        flex: 1;
        margin-right: 14px;
        p {
          font-family: "Hiragino Kaku";
        }
      }
      .company-content {
        flex: 1;
        margin-left: 14px;
      }
      p {
        text-align: left;
        margin-top: 34px;
        word-break: break-word;
        font-family: "Hiragino Sans";
        font-size: 16px;
        color: #000000;
      }
    }
  }

  .why-container {
    background-image: url(../assets/images/desktop/why_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000;
    padding: 71px 22% 130px 22%;
    .txt-title {
      color: #4D4D4D;
    }
    .txt-des {
      color: #FFFFFF;
    }
    p {
      color: #FFFFFF;
      font-size: 16px;
      font-family: "Hiragino Kaku";
    }
    .content-container {
      display: flex;
      margin-bottom: 40px;
      p {
        color: #FFFFFF;
        font-size: 16px;
        flex: 1;
        font-family: "Hiragino Kaku";
      }
      p:nth-child(1) {
        margin-right: 15px;
      }

      p:nth-child(2) {
        margin: 0px 15px;
      }
      p:nth-child(3) {
        margin-left: 15px;
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
    padding: 71px 22% 130px 22%;
    .txt-title {
      color: #888888;
    }
    .txt-des {
      color: #FFFFFF;
    }
    .infor-container {
      display: flex;
      .item {
        text-align: center;
        flex: 1;
        p {
          margin-top: 5px;
          font-size: 16px;
          font-family: "Hiragino Kaku";
          color: white;
        }
        .only-container {
          position: relative;
          .txt-only {
            position: absolute;
            top: 50%;
            left: 24%;
            transform: translateY(-50%);
            color: white;
            font-size: 49px;
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
    padding: 71px 22% 130px 22%;

    .item-container {
      position: relative;
      img {
        margin-right: 15px;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-family: "Hiragino Kaku";
        font-size: 16px;
        color: #000000;
      }
    }
  }
  .motion-container {
    background-image: url(../assets/images/desktop/motion_bg.png);
    background-repeat: no-repeat;
    background-color: #000000;
    background-size: cover;
    padding: 71px 22% 130px 22%;

    .txt-title {
      color: #4D4D4D;
    }
    .txt-des {
      color: #FFFFFF;
    }
  }
</style>
