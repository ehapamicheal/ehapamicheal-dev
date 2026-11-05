
const EducationCard = ({ period, title, subtitle, description }) => {
  return (
    <div className="h-full space-y-4 relative group rounded-3xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
        {/*============= Period badge =============*/}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-medium">{period}</span>
        </div>

        <div className="space-y-1">
            <h4 className="text-white text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {title}
            </h4>

            {subtitle && (
                <p className="text-sm md:text-base font-semibold text-white/60 leading-relaxed">
                {subtitle}
                </p>
            )}
        </div>

        <p className="text-sm text-white/60 font-normal leading-relaxed">
            {description}
        </p>
        
        {/*============= OVERLAY =============*/}
        <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none" />
    </div>
  )
}

export default EducationCard