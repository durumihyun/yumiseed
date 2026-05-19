"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles, Calculator, BookOpen, User, Camera, MessageCircle, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [price, setPrice] = useState("");

  const calculateTax = (priceStr: string) => {
    const numPrice = parseInt(priceStr.replace(/,/g, ''), 10);
    if (!numPrice || isNaN(numPrice)) return "- 원";

    let rate = 1.1;
    if (numPrice > 900000000) {
      rate = 3.3;
    } else if (numPrice > 600000000) {
      const taxRate = (numPrice / 100000000) * (2 / 3) - 3;
      rate = taxRate + (taxRate * 0.1);
    }

    const tax = Math.floor(numPrice * (rate / 100));
    return new Intl.NumberFormat('ko-KR').format(tax) + " 원";
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    if (val) {
      setPrice(new Intl.NumberFormat('ko-KR').format(parseInt(val, 10)));
    } else {
      setPrice("");
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#f8f9fc] relative pb-28 font-sans selection:bg-[#c5a059] selection:text-white">
      {/* Header Area */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 max-w-md mx-auto w-full">
          <h1 className="text-xl font-extrabold tracking-tight text-[#0a192f] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#c5a059]" />
            유미씨 내집마련
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-5 bg-[#0a192f] text-white overflow-hidden max-w-md mx-auto w-full rounded-b-[2.5rem] shadow-xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/80 to-[#0a192f] z-10" />
          <div className="w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
        </div>

        <div className="relative z-20 flex flex-col mt-4">
          <span className="inline-block px-3 py-1 bg-[#c5a059]/20 border border-[#c5a059]/30 text-[#c5a059] rounded-full font-bold text-xs mb-4 w-fit tracking-wider shadow-sm">
            팔리는 사람이 되는 시대
          </span>
          <h2 className="text-[2rem] font-extrabold leading-[1.2] mb-8 tracking-tight">
            내집마련은 곧<br />생존마련입니다.
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl mb-2 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#c5a059]/20 rounded-full blur-2xl group-hover:bg-[#c5a059]/30 transition-all"></div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 relative z-10">
              <span className="text-[#c5a059] text-2xl">15년 경력</span>의 실전 노하우
            </h3>
            <p className="text-slate-300 text-[15px] leading-relaxed relative z-10 font-medium">
              수백 건의 컨설팅과 실전 투자 경험으로 당신의 소중한 자산을 지키고 불려드립니다. 불확실한 시장에서 가장 확실한 선택을 하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-5 max-w-md mx-auto w-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-[#c5a059] rounded-full"></div>
          <h3 className="text-2xl font-extrabold text-[#0a192f]">성공 후기</h3>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { tag: "30대 신혼부부", review: "막막했던 청약과 매매 사이에서 완벽한 가이드를 주셨어요. 덕분에 좋은 조건으로 첫 집을 마련했습니다!" },
            { tag: "30대 싱글", review: "종잣돈이 부족해서 포기하려 했는데, 제 상황에 맞는 소형 아파트 로드맵을 짜주셔서 정말 든든했습니다." },
            { tag: "40대 갈아타기", review: "매도 타이밍과 매수 타이밍을 정확히 짚어주셔서 상급지로 성공적으로 갈아탔습니다. 감사합니다!" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#c5a059]/5 rounded-bl-[4rem] z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#0a192f] text-white text-[11px] px-2.5 py-1.5 rounded-md font-bold tracking-wide">{item.tag}</span>
                  <div className="flex text-[#c5a059] text-sm">★★★★★</div>
                </div>
                <p className="text-slate-700 text-[15px] leading-relaxed font-medium">"{item.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Section */}
      <section className="py-14 px-5 bg-white max-w-md mx-auto w-full shadow-[0_-4px_24px_rgb(0,0,0,0.02)] relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-6 bg-[#0a192f] rounded-full"></div>
          <h3 className="text-2xl font-extrabold text-[#0a192f]">프로그램 안내</h3>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border-2 border-[#0a192f] rounded-[1.5rem] p-7 shadow-xl shadow-[#0a192f]/5 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#0a192f]/5 rounded-full blur-2xl"></div>
            <div className="w-12 h-12 bg-[#0a192f] rounded-2xl flex items-center justify-center text-white mb-5 shadow-md">
              <User className="w-6 h-6" />
            </div>
            <h4 className="text-[22px] font-extrabold text-[#0a192f] mb-3 tracking-tight">1:1 맞춤 컨설팅</h4>
            <p className="text-slate-600 text-[15px] mb-5 leading-relaxed font-medium">
              현재 자산, 소득, 목표를 분석하여 당신에게 딱 맞는 최적의 내집마련 로드맵을 설계해 드립니다.
            </p>
            <ul className="text-[14px] text-slate-700 space-y-3 mb-7 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#c5a059]" /> 지역 선정 및 임장 가이드</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#c5a059]" /> 자금 조달 계획 수립</li>
            </ul>
            <button className="w-full py-3.5 bg-[#0a192f] text-white rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-[#0a192f]/90 transition-colors shadow-md active:scale-[0.98]">
              예약하기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-50 rounded-[1.5rem] p-7 border border-slate-200">
            <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#0a192f] mb-5 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="text-[20px] font-extrabold text-[#0a192f] mb-3 tracking-tight">씨드클래스 <span className="text-[16px] font-bold text-slate-500">(기초반)</span></h4>
            <p className="text-slate-600 text-[15px] mb-6 leading-relaxed font-medium">
              부동산이 처음인 부린이를 위한 기초 체력 다지기. 종잣돈 모으기부터 기본 용어까지 마스터하세요.
            </p>
            <button className="w-full py-3.5 bg-white border border-slate-300 text-[#0a192f] rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors active:scale-[0.98]">
              상세보기 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Insight Columns */}
      <section className="py-14 px-5 max-w-md mx-auto w-full">
        <div className="flex items-end justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-6 bg-[#c5a059] rounded-full"></div>
            <h3 className="text-2xl font-extrabold text-[#0a192f]">인사이트 칼럼</h3>
          </div>
          <a href="#" className="text-sm font-bold text-[#c5a059] flex items-center gap-0.5 hover:opacity-80 transition-opacity">
            더보기 <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="flex flex-col gap-3 mb-8">
          {[
            { title: "2026년 하반기 청약 시장 전망과 전략", date: "2026.05.01" },
            { title: "신생아 특례대출, 나도 받을 수 있을까?", date: "2026.04.25" },
            { title: "서울 구축 아파트 vs 수도권 신축 아파트", date: "2026.04.18" }
          ].map((col, idx) => (
            <a key={idx} href="#" className="flex flex-col p-4.5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#c5a059]/40 hover:shadow-md transition-all group">
              <span className="text-[12px] text-[#c5a059] font-bold mb-1.5">{col.date}</span>
              <h4 className="text-slate-800 font-bold text-[16px] group-hover:text-[#0a192f] transition-colors">{col.title}</h4>
            </a>
          ))}
        </div>
        <a href="#" className="w-full py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-opacity active:scale-[0.98]">
          <Camera className="w-5 h-5" /> 인스타그램 바로가기
        </a>
      </section>

      {/* Tax Calculator */}
      <section className="pt-14 pb-20 px-5 bg-[#0a192f] text-white max-w-md mx-auto w-full rounded-t-[2.5rem] mt-4 shadow-[0_-10px_40px_rgb(10,25,47,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-[#c5a059]/20 rounded-xl">
              <Calculator className="w-7 h-7 text-[#c5a059]" />
            </div>
            <h3 className="text-[22px] font-extrabold tracking-tight">간편 취득세 계산기</h3>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-7 border border-white/10 shadow-2xl">
            <label className="block text-[14px] font-bold mb-3 text-slate-300">매매가 입력 (원)</label>
            <div className="relative mb-8">
              <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                placeholder="예: 500,000,000"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl py-4 px-5 text-white text-lg font-semibold placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all"
              />
              <span className="absolute right-5 top-4 text-slate-400 font-bold">원</span>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-end mb-3">
                <span className="text-slate-300 text-[15px] font-medium pb-1">예상 취득세 (대략)</span>
                <span className="text-[#c5a059] font-extrabold text-[26px] tracking-tight">{calculateTax(price)}</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-3 leading-relaxed">
                * 85㎡ 이하 1주택자 기준 단순 계산이며, 실제 세액과 다를 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-36 px-5 bg-slate-900 text-slate-400 max-w-md mx-auto w-full text-center relative z-0">
        <h4 className="text-white font-extrabold text-xl mb-5 tracking-tight flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#c5a059]" /> 유미씨 내집마련
        </h4>
        <div className="flex justify-center gap-4 mb-10">
          <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors shadow-sm">
            <Camera className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center hover:bg-[#FEE500]/90 transition-colors shadow-sm">
            <MessageCircle className="w-6 h-6 text-[#3A1D1D] fill-[#3A1D1D]" />
          </a>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 mb-10 text-left border border-slate-700">
          <h5 className="text-white font-bold mb-2 flex items-center gap-2">
            무료 소식지 구독
          </h5>
          <p className="text-[13px] text-slate-400 mb-5 leading-relaxed">가장 빠른 부동산 핵심 정보를 이메일로 받아보세요.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="이메일 주소" className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#c5a059] transition-colors" />
            <button className="bg-[#c5a059] text-white px-5 py-3 rounded-xl text-[14px] font-bold hover:bg-[#b59048] transition-colors">구독</button>
          </div>
        </div>

        <p className="text-[12px] font-medium">&copy; 2026 유미씨 내집마련. All rights reserved.</p>
      </footer>

      {/* Floating CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#f8f9fc] via-[#f8f9fc]/90 to-transparent z-50 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059] to-[#d4b475] rounded-2xl blur opacity-30 animate-pulse"></div>
          <button className="relative w-full py-4 bg-gradient-to-r from-[#c5a059] to-[#d4b475] text-[#0a192f] rounded-2xl font-extrabold text-[17px] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" /> 유료 컨설팅 예약하기
          </button>
        </div>
      </div>
    </main>
  );
}

