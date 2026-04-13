export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/e3ead522-e0eb-4742-a3af-dad97330c16d/files/161f24bc-a231-42f7-ad3b-73fcf72520a5.jpg"
          alt="Child learning math on phone"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="features">Учись в своём темпе</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Адаптивные уровни сложности, игровые задания и мгновенная обратная связь — математика становится понятной с первого занятия.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-2xl">📐</span>
            <span className="text-base">Геометрия, алгебра, статистика — всё в одном приложении</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-2xl">🏆</span>
            <span className="text-base">Система достижений и прогресс по темам</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-2xl">🎯</span>
            <span className="text-base">Персональный план обучения по слабым местам</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide" id="download">
          Попробовать бесплатно
        </button>
      </div>
    </div>
  );
}