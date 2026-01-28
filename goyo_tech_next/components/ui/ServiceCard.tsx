interface ServiceCardProps {
  icon: string | React.ReactNode
  title: string
  description: string
  tags: string[]
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'cyan' | 'indigo' | 'teal' | 'yellow' | 'pink' | 'gray'
}

const colorClasses = {
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    tags: 'bg-blue-50 text-blue-600'
  },
  green: {
    icon: 'bg-green-50 text-green-600',
    tags: 'bg-green-50 text-green-600'
  },
  purple: {
    icon: 'bg-purple-50 text-purple-600',
    tags: 'bg-purple-50 text-purple-600'
  },
  orange: {
    icon: 'bg-orange-50 text-orange-600',
    tags: 'bg-orange-50 text-orange-600'
  },
  red: {
    icon: 'bg-red-50 text-red-600',
    tags: 'bg-red-50 text-red-600'
  },
  cyan: {
    icon: 'bg-cyan-50 text-cyan-600',
    tags: 'bg-cyan-50 text-cyan-600'
  },
  indigo: {
    icon: 'bg-indigo-50 text-indigo-600',
    tags: 'bg-indigo-50 text-indigo-600'
  },
  teal: {
    icon: 'bg-teal-50 text-teal-600',
    tags: 'bg-teal-50 text-teal-600'
  },
  yellow: {
    icon: 'bg-yellow-50 text-yellow-600',
    tags: 'bg-yellow-50 text-yellow-600'
  },
  pink: {
    icon: 'bg-pink-50 text-pink-600',
    tags: 'bg-pink-50 text-pink-600'
  },
  gray: {
    icon: 'bg-white text-gray-600',
    tags: 'bg-gray-100 text-gray-600'
  }
}

export default function ServiceCard({ icon, title, description, tags, color }: ServiceCardProps) {
  const colors = colorClasses[color]

  return (
    <div className="min-w-[300px] group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#9980ff]/30 hover:translate-y-0">
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${colors.icon}`}>
        {typeof icon === 'string' ? (
          <span className="text-xl">{icon}</span>
        ) : (
          icon
        )}
      </div>

      <h4 className="text-lg font-bold text-[#100c1d] mb-2">{title}</h4>

      <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span key={index} className={`px-2 py-1 text-xs rounded ${colors.tags}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}