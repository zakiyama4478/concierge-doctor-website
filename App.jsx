import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

// 申込フォームURL(変更時はここだけ書き換えればOK)
const FORM_URL = "https://forms.gle/L8gqrbv6Ms9x7BC8A";

export default function App() {
  // スクロール出現アニメーション
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ============ ヘッダー ============ */}
      <header>
        <div className="header-in">
          <a className="logo" href="#top">
            日本コンシェルジュドクター協会
            <small>JAPAN CONCIERGE DOCTOR ASSOCIATION</small>
          </a>
          <nav aria-label="主要ナビゲーション">
            <ul>
              <li><a href="#about">コンシェルジュ医療とは</a></li>
              <li><a href="#value">提供価値</a></li>
              <li><a href="#flow">参加の流れ</a></li>
              <li><a href="#trust">協会について</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <a className="header-cta" href={FORM_URL} target="_blank" rel="noopener">
            入会のご案内
          </a>
        </div>
      </header>

      {/* ============ 1. ファーストビュー ============ */}
      <main id="top">
        <div className="hero">
          <div className="wrap">
            <p className="hero-eyebrow">医師のための認証機関・会員ネットワーク</p>
            <h1>
              <span className="nb">理想の医療に近づくための、</span>
              <span className="nb"><em>新しい選択肢</em>を。</span>
            </h1>
            <p>
              保険診療の枠組みだけでは応えきれない、患者一人ひとりの願いがあります。日本コンシェルジュドクター協会は、「コンシェルジュ医療」を実践し、探求する医師がつながり、学び合うためのネットワークです。
            </p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noopener">
                無料で会員参加する
              </a>
              <a className="btn btn-ghost" href="#about">コンシェルジュ医療を知る</a>
            </div>
            <span className="btn-note">※ 創設期につき、現在は入会金・年会費ともに無料です。</span>
          </div>
        </div>

        {/* ============ 2. コンシェルジュ医療とは ============ */}
        <section className="about" id="about">
          <div className="wrap">
            <span className="sec-label reveal">About Concierge Medicine</span>
            <h2 className="reveal">コンシェルジュ医療とは</h2>
            <p className="lead reveal">
              耳慣れない言葉かもしれません。けれどその考え方は、医療の原点にあるものです。
            </p>
            <blockquote className="def-quote reveal">
              <span className="nb">コンシェルジュ医療とは、</span>
              <span className="nb">一人の医師が一人の患者と十分な時間をかけて向き合い、</span>
              <span className="nb">その人の人生に寄り添って継続的に支える医療のかたちです。</span>
            </blockquote>
            <div className="cards">
              <div className="card reveal">
                <span className="num">01</span>
                <h3>時間をかけて、向き合う</h3>
                <p>限られた診察時間では聞ききれない生活背景や価値観まで丁寧に伺い、その人に合った選択肢をともに考えます。</p>
              </div>
              <div className="card reveal">
                <span className="num">02</span>
                <h3>継続的に、伴走する</h3>
                <p>症状が出てから治すだけでなく、予防から療養後まで。かかりつけの関係を超えた、長期的なパートナーシップを築きます。</p>
              </div>
              <div className="card reveal">
                <span className="num">03</span>
                <h3>制度の枠を、補い合う</h3>
                <p>保険診療を否定するものではありません。公的医療制度を尊重しながら、その手が届きにくい領域を補完する選択肢です。</p>
              </div>
            </div>
            <p className="about-note reveal">
              ※ コンシェルジュ医療は主に保険外(自由診療)の枠組みで提供されます。内容・費用は各医療機関によって異なり、本協会が特定の診療の効果を保証するものではありません。
            </p>
          </div>
        </section>

        {/* ============ 3. 課題提起 ============ */}
        <section className="problem">
          <div className="wrap">
            <span className="sec-label reveal">Why We Exist</span>
            <h2 className="reveal">なぜいま、この協会が必要なのか</h2>
            <p className="lead reveal">
              日本の保険診療は、世界に誇るべき制度です。同時に、制度であるがゆえの構造的な限界も抱えています。私たちはそれを、現場で日々感じてきました。
            </p>
            <div className="problem-grid">
              <div className="problem-item reveal">
                <h3>「3分診療」のもどかしさ</h3>
                <p>外来の構造上、一人の患者に割ける時間はどうしても限られます。本当はもっと聞きたいこと、伝えたいことがある――多くの医師が抱えるジレンマです。</p>
              </div>
              <div className="problem-item reveal">
                <h3>制度の枠に収まらない願い</h3>
                <p>予防への投資、セカンドオピニオンの伴走、療養生活全体の設計。患者の切実な願いの中には、保険診療の枠組みでは応えにくいものがあります。</p>
              </div>
              <div className="problem-item reveal">
                <h3>実践者が、孤立している</h3>
                <p>コンシェルジュ医療に取り組む医師はまだ少なく、知見を交換できる相手も、参照できる基準もほとんどありません。一人ひとりが手探りで道を拓いているのが現状です。</p>
              </div>
            </div>
            <p className="problem-close reveal">
              <span className="nb">手探りの実践を、</span>
              <span className="nb">共有できる知へ。</span>
              <span className="nb">個の挑戦を、</span>
              <span className="nb">医療の選択肢へ。</span>
            </p>
          </div>
        </section>

        {/* ============ 4. 提供価値 ============ */}
        <section className="value" id="value">
          <div className="wrap">
            <span className="sec-label reveal">Member Benefits</span>
            <h2 className="reveal">協会が提供する3つの価値</h2>
            <p className="lead reveal">
              日本コンシェルジュドクター協会は、コンシェルジュ医療の実践に必要な「仲間」「知見」「基準」を、会員とともに育てていきます。
            </p>

            <div className="pillar reveal">
              <div className="pillar-head">
                <div className="kanji">つながる</div>
                <span className="en">NETWORK</span>
              </div>
              <div className="pillar-body">
                <h3>実践者同士のネットワーク</h3>
                <p>同じ志を持つ医師と出会い、日々の実践の悩みや工夫を率直に語り合える場を提供します。</p>
                <ul>
                  <li>会員限定のオンラインコミュニティ</li>
                  <li>定例の症例検討会・実践共有会(オンライン/対面)</li>
                  <li>地域や専門領域を越えた医師同士の相互紹介</li>
                </ul>
              </div>
            </div>

            <div className="pillar reveal">
              <div className="pillar-head">
                <div className="kanji">まなぶ</div>
                <span className="en">KNOWLEDGE</span>
              </div>
              <div className="pillar-body">
                <h3>実践知の共有とアーカイブ</h3>
                <p>コンシェルジュ医療の立ち上げ方から運営の実務まで、先行者の経験を体系化した知見として共有します。</p>
                <ul>
                  <li>開設準備・診療設計・料金体系などの実務ナレッジ</li>
                  <li>法務・広告表現・契約まわりの留意点に関する勉強会</li>
                  <li>国内外の先行事例のリサーチとレポート</li>
                </ul>
              </div>
            </div>

            <div className="pillar reveal">
              <div className="pillar-head">
                <div className="kanji">かたちにする</div>
                <span className="en">STANDARD</span>
              </div>
              <div className="pillar-body">
                <h3>質の基準づくりと認証制度</h3>
                <p>コンシェルジュ医療が患者から信頼される選択肢となるよう、倫理・質の基準を策定し、将来的には認証制度として運用します。</p>
                <ul>
                  <li>診療の質・倫理に関するガイドラインの共同策定</li>
                  <li>基準を満たした会員への認証付与(制度設計中)</li>
                  <li>社会への発信を通じた、コンシェルジュ医療の健全な普及</li>
                </ul>
              </div>
            </div>

            <div className="founding reveal">
              <h3>創設期のいま、参加するということ</h3>
              <p>
                協会は立ち上げ間もない組織です。完成された制度をお渡しする段階にはありません。だからこそ、基準づくりや活動の設計そのものに、創設メンバーとして関わっていただけます。
                <strong>この段階にご参加いただく方には、入会金・年会費を無料とさせていただいています。</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ============ 5. 仕組み・流れ ============ */}
        <section className="flow" id="flow">
          <div className="wrap">
            <span className="sec-label reveal">How It Works</span>
            <h2 className="reveal">入会から活用までの流れ</h2>
            <p className="lead reveal">お申し込みから活動への参加まで、4つのステップで完結します。</p>
            <div className="steps">
              <div className="step reveal">
                <h3>フォームから申し込む</h3>
                <p>所定のフォームに氏名・ご所属・関心領域などをご記入ください。所要時間は3分ほどです。</p>
              </div>
              <div className="step reveal">
                <h3>事務局からのご連絡</h3>
                <p>内容を確認のうえ、事務局より入会のご案内をお送りします。簡単なオンライン面談をお願いする場合があります。</p>
              </div>
              <div className="step reveal">
                <h3>コミュニティに参加</h3>
                <p>会員限定のオンラインコミュニティにご招待します。自己紹介から、気軽に始めてください。</p>
              </div>
              <div className="step reveal">
                <h3>活動をともにつくる</h3>
                <p>勉強会・症例検討会への参加はもちろん、基準づくりや企画への参画も歓迎します。関わり方の深さはご自身で選べます。</p>
              </div>
            </div>
            <p className="flow-note reveal">※ 退会はいつでも可能です。退会に伴う費用は一切かかりません。</p>
          </div>
        </section>

        {/* ============ 6. 信頼性の根拠 ============ */}
        <section id="trust">
          <div className="wrap">
            <span className="sec-label reveal">Our Principles</span>
            <h2 className="reveal">私たちが大切にすること</h2>
            <p className="lead reveal">
              コンシェルジュ医療は、まだ社会的な合意の途上にある医療のかたちです。だからこそ協会は、自らに厳しい規範を課すことから始めます。
            </p>

            <div className="trust-block reveal">
              <h3>理念 ― 三つの約束</h3>
              <ul className="principles">
                <li className="reveal">
                  <span className="no">壱</span>
                  <div>
                    <strong>患者の利益を、常に最上位に置く</strong>
                    <p>コンシェルジュ医療は医師の収益モデルである前に、患者のための選択肢でなければなりません。私たちはすべての基準をこの原則から導きます。</p>
                  </div>
                </li>
                <li className="reveal">
                  <span className="no">弐</span>
                  <div>
                    <strong>公的医療制度への敬意を忘れない</strong>
                    <p>保険診療を貶めて自由診療へ誘導するような言動を、協会は認めません。コンシェルジュ医療は制度の代替ではなく、補完です。</p>
                  </div>
                </li>
                <li className="reveal">
                  <span className="no">参</span>
                  <div>
                    <strong>誇張ではなく、誠実な言葉で語る</strong>
                    <p>効果の保証、他施設との比較優良、体験談による誘引――医療広告ガイドラインが戒める表現を、会員の発信においても自主基準として避けます。</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="trust-block reveal">
              <h3>運営体制</h3>
              <div className="gov-grid">
                <div className="gov-item reveal">
                  <h4>運営主体</h4>
                  <p>日本コンシェルジュドクター協会(設立準備中)。代表・運営メンバーはいずれも臨床現場に立つ現役医師です。詳細は入会案内にてお伝えします。</p>
                </div>
                <div className="gov-item reveal">
                  <h4>会員資格</h4>
                  <p>正会員は医師免許を有する方を対象としています。入会時に医籍の確認をお願いしています。医療関係者・研究者向けの賛助会員区分は今後整備予定です。</p>
                </div>
                <div className="gov-item reveal">
                  <h4>基準・認証の整備</h4>
                  <p>診療の質と倫理に関するガイドライン、ならびに認証制度は、会員とともに策定を進めています。策定の経過は会員に公開し、透明性を保ちます。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 7. よくある質問 ============ */}
        <section className="faq" id="faq">
          <div className="wrap">
            <span className="sec-label reveal">FAQ</span>
            <h2 className="reveal">よくある質問</h2>
            <details className="reveal">
              <summary>なぜ会費が無料なのですか?</summary>
              <p className="ans">協会は創設期にあり、まずは志を同じくする仲間を集め、活動の土台をともにつくる段階だと考えているためです。組織と提供価値が整った段階で会費制度を導入する可能性がありますが、その際は既存会員に事前にご説明し、継続の意思を確認します。無断で課金されることはありません。</p>
            </details>
            <details className="reveal">
              <summary>コンシェルジュ医療の経験がなくても入会できますか?</summary>
              <p className="ans">はい。むしろ「これから始めたい」「関心があり学びたい」という医師の方こそ歓迎します。実践者と検討中の方が同じ場で学び合うこと自体が、協会の価値だと考えています。</p>
            </details>
            <details className="reveal">
              <summary>勤務医ですが参加できますか?</summary>
              <p className="ans">参加いただけます。開業の有無は問いません。将来の選択肢として学びたい勤務医の方や、所属先でのより良い診療のヒントを求める方のご参加も歓迎します。</p>
            </details>
            <details className="reveal">
              <summary>コンシェルジュ医療は自由診療ということですか?</summary>
              <p className="ans">多くの場合、保険外(自由診療)の枠組みで提供されますが、協会は自由診療への誘導を目的とする団体ではありません。公的医療制度を尊重しつつ、制度の手が届きにくい領域を補う選択肢として、質と倫理を伴った普及を目指しています。</p>
            </details>
            <details className="reveal">
              <summary>患者ですが、コンシェルジュ医療を受けられる医師を紹介してもらえますか?</summary>
              <p className="ans">現時点では、協会として特定の医療機関のご紹介や診療のあっせんは行っておりません。将来的には、認証制度を通じて信頼できる情報を社会に提供することを目指しています。コンシェルジュ医療について知っていただくこと自体を歓迎しますので、本ページをご覧いただければ幸いです。</p>
            </details>
            <details className="reveal">
              <summary>地方在住でも活動に参加できますか?</summary>
              <p className="ans">はい。コミュニティ運営と勉強会はオンラインを基本としており、お住まいの地域を問わずご参加いただけます。対面イベントを開催する場合も、オンライン参加の選択肢をできる限り用意します。</p>
            </details>
            <details className="reveal">
              <summary>退会したい場合はどうすればよいですか?</summary>
              <p className="ans">事務局へのご連絡のみで、いつでも退会いただけます。理由をお尋ねすることはありますが、引き留めや費用の請求は一切ありません。</p>
            </details>
          </div>
        </section>

        {/* ============ 8. 最終CTA ============ */}
        <section className="final">
          <div className="wrap">
            <span className="sec-label reveal" style={{ color: "var(--gold-light)" }}>Join Us</span>
            <h2 className="reveal">
              <span className="nb">理想の医療は、</span>
              <span className="nb">一人ではつくれない。</span>
            </h2>
            <p className="reveal">
              コンシェルジュ医療は、まだ名前の知られていない小さな選択肢です。けれど、患者と深く向き合いたいと願う医師の手で、確かな医療のかたちに育てていける――私たちはそう信じています。創設期のいま、あなたの参加をお待ちしています。
            </p>
            <div className="reveal">
              <a className="btn btn-primary" href={FORM_URL} target="_blank" rel="noopener">
                無料で会員参加する
              </a>
              <span className="btn-note">※ 入会金・年会費無料/退会はいつでも可能です</span>
            </div>
          </div>
        </section>
      </main>

      {/* ============ 9. フッター ============ */}
      <footer>
        <div className="wrap">
          <div className="foot-logo">日本コンシェルジュドクター協会</div>
          <p>JAPAN CONCIERGE DOCTOR ASSOCIATION</p>
          <p style={{ marginTop: "14px" }}>
            <a href="privacy.html" style={{ color: "rgba(255,255,255,.8)" }}>
              プライバシーポリシー
            </a>
          </p>
          <div className="disclaimer">
            【免責事項】本ページは日本コンシェルジュドクター協会の活動をご案内するものであり、特定の医療機関・診療行為への受診を勧誘するものではありません。コンシェルジュ医療の内容・費用は提供する各医療機関により異なります。本協会は特定の診療の効果を保証するものではなく、医療機関の選択にあたっては、各機関の説明を直接ご確認ください。
          </div>
          <p className="copyright">© 2026 Japan Concierge Doctor Association. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
