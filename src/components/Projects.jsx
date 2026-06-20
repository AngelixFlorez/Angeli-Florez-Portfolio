import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitFork, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data'
import { skillConfig } from '../data/skillConfig'
import { useLanguage } from '../context/LanguageContext'

const imgUrl = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

const techDefault = {
  color: '#a1a1aa',
  bgColor: 'rgba(161,161,170,0.1)',
  borderColor: 'rgba(161,161,170,0.3)',
  logoSrc: ''
}

function TechBadge({ name, size = 'sm' }) {
  const cfg = skillConfig[name] || techDefault
  const isSmall = size === 'sm'

  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono rounded-md border transition-all duration-300"
      style={{
        backgroundColor: cfg.bgColor,
        borderColor: cfg.borderColor,
        color: cfg.color,
        padding: isSmall ? '3px 8px' : '4px 10px',
        fontSize: isSmall ? '11px' : '12px',
      }}
    >
      {cfg.logoSrc && (
        <img src={cfg.logoSrc} alt={name} className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      )}
      {name}
    </span>
  )
}

function ProjectCard({ project, index, isInView, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.15, type: 'spring', damping: 20 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px -20px rgba(168,85,247,0.4)' }}
      onClick={() => onClick(project)}
      className="group cursor-pointer rounded-2xl border border-white/5 overflow-hidden glass-card hover:border-primary/40 transition-all duration-500 relative"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={imgUrl(project.image)}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

        <div className="absolute top-3 right-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.color }}
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <TechBadge key={t} name={t} size="sm" />
          ))}
          {project.tech.length > 3 && (
            <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/5 border border-white/10 text-text-secondary">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const { t } = useLanguage()
  const images = project.images || [project.image]
  const [currentImg, setCurrentImg] = useState(0)

  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImg = () => setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.5, type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full rounded-2xl glass-card border border-white/10 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        style={{ maxHeight: '90vh' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative flex-shrink-0" style={{ height: 'clamp(320px, 62vh, 540px)' }}>
          <div className="absolute inset-0 bg-surface" />
          <motion.img
            key={currentImg}
            src={imgUrl(images[currentImg])}
            alt={`${project.title} ${currentImg + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain relative z-10"
            style={{ backgroundColor: project.color + '15' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none z-20" />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? 'bg-white w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">{t('projects', 'problem')}</h4>
              <p className="text-sm text-text-secondary">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">{t('projects', 'result')}</h4>
              <p className="text-sm text-text-secondary">{project.result}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} size="md" />
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> {t('projects', 'demo')}
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary text-sm font-medium hover:text-text-primary hover:border-text-muted transition-all"
            >
              <GitFork className="w-4 h-4" /> {t('projects', 'repo')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-primary tracking-widest uppercase">{t('projects', 'label')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          {t('projects', 'title')} <span className="gradient-text">{t('projects', 'highlight')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted max-w-2xl mb-12"
        >
          {t('projects', 'subtitle')}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
