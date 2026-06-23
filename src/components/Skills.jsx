import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { skills } from '../data'
import { skillConfig } from '../data/skillConfig'
import { useLanguage } from '../context/LanguageContext'

const allSkills = Object.values(skills).flat()

const defaultConfig = {
  color: '#a1a1aa',
  bgColor: 'rgba(255,255,255,0.05)',
  borderColor: 'rgba(255,255,255,0.1)',
  hoverBorderColor: 'rgba(255,255,255,0.3)',
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><path d="M12 6v12M6 12h12"/></svg>`
}

function SkillBadge({ name }) {
  const config = skillConfig[name] || defaultConfig

  return (
    <div
      className="px-5 py-3 rounded-full flex items-center gap-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 border"
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
        color: config.color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = config.hoverBorderColor
        e.currentTarget.style.backgroundColor = config.bgColor.replace('0.1', '0.2')
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = config.borderColor
        e.currentTarget.style.backgroundColor = config.bgColor
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {config.logoSrc ? (
        <img src={config.logoSrc} alt={name} className="w-6 h-6 flex-shrink-0" />
      ) : (
        <span
          className="w-6 h-6 flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: config.logo }}
        />
      )}
      <span className="text-[15px]">{name}</span>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const duplicatedSkills = useMemo(() => [...allSkills, ...allSkills], [])

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding !py-12 md:!py-16 lg:!py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">{t('skills', 'label')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
        >
          {t('skills', 'title')} <span className="gradient-text">{t('skills', 'highlight')}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <Carousel
              opts={{ loop: true, dragFree: true }}
            >
              <CarouselContent className="-ml-3">
                {duplicatedSkills.map((skill, i) => (
                  <CarouselItem key={`${skill.name}-${i}`} className="pl-3 basis-auto">
                    <SkillBadge name={skill.name} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
