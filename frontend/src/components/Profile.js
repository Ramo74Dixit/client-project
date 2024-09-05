import HeroImage from "./HeroImage";

export default function Profile() {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="md:flex">
        <div className="md:w-[44%] mt-3 flex border-gray-900">
          <div className="w-full h-full md:w-full md:h-auto text-[#333333] p-4 flex justify-center items-center">
            <div className="w-full md:w-auto">
              <h5 className="font-[Nunito] text-[18px] font-bold mt-4 ml-2 md:ml-2">
                1992/5/14生まれ、日本とカナダのハーフ。
              </h5>

              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                16歳でファッションモデルデビュー
              </h5>

              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                デビュー1年目にしてフジテレビ“すぽると！”の
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                レギュラーに大抜擢される。
              </h5>

              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                2013年に1st写真集、2015年には2nd写真集と
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                スタイルブックを同時発売、2018年に3rd写真集を発売。
              </h5>

              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                2016年に、ViVi専属モデルを卒業し、“sweet”や
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                “BAILA”“SENSE”など多数ファッション誌に出演中。
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                2019年、オリジナルプロテインCRASをプロデュース。
              </h5>
              <h5 className="font-[Nunito] text-[17px] font-bold mt-0 ml-2">
                2020年には自身のコスメブランド「LAPERICUM」を設立し、
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                クリエイティブな分野でも活躍の場を広げている。
              </h5>

              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                同年、車好きが高じて公式YouTubeチャンネル
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
                「MAGGY‘s Beauty and the Speed」を開設し、
              </h5>
              <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
                モデルのマギーとは異なった一面を見せている。
              </h5>
            </div>
          </div>
        </div>
        <div className="md:w-[51%] md:h-[95vh] md:bg-cover md:overflow-hidden p-5">
            <HeroImage className="hidden sm:block md:w-full md:h-[40vh] md:p-10 md:object-cover " />
          </div>
        <div className="md:w-[10%] md:ml-auto md:bg-[#F7D9C4]"></div>
      </div>
    </div>
  );
}
