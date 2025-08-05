import React from 'react';
import { 
  WrenchScrewdriverIcon, 
  PaintBrushIcon, 
  SparklesIcon, 
  BuildingStorefrontIcon, 
  DevicePhoneMobileIcon, 
  HeartIcon,
  ArrowUpRightIcon
} from '@heroicons/react/24/outline';

const serviceCategories = [
  { 
    name: 'Home Repairs', 
    description: 'Plumbing, electrical, & more.',
    icon: WrenchScrewdriverIcon, 
    themeColor: 'blue'
  },
  { 
    name: 'Home & Office Painting', 
    description: 'Transform your living space.',
    icon: PaintBrushIcon, 
    themeColor: 'teal'
  },
  { 
    name: 'Cleaning Services', 
    description: 'Deep clean, regular clean.',
    icon: SparklesIcon, 
    themeColor: 'blue'
  },
  { 
    name: 'Shops & Showrooms', 
    description: 'Services for your business.',
    icon: BuildingStorefrontIcon, 
    themeColor: 'teal'
  },
  { 
    name: 'Appliance Repair', 
    description: 'AC, washing machine, etc.',
    icon: DevicePhoneMobileIcon, 
    themeColor: 'blue'
  },
  { 
    name: 'Health & Wellness', 
    description: 'Yoga, personal training.',
    icon: HeartIcon, 
    themeColor: 'teal'
  },
];

const themeStyles = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    hoverRing: 'hover:ring-blue-500'
  },
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-600',
    hoverRing: 'hover:ring-teal-500'
  }
}

const Categories = () => {
  return (
    <section className="w-full bg-slate-200 shadow-xl rounded-xl py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600 tracking-wider">Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Wide Range of Categories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Whatever you need, we've got a verified professional for the job.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const styles = themeStyles[category.themeColor];
            return (
              <div 
                key={category.name} 
                className={`group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm ring-1 ring-inset ring-gray-200 transition-all duration-300 ${styles.hoverRing} hover:ring-2 hover:shadow-lg`}
              >
                <div className="flex items-start gap-x-4">
                  <div className={`flex-shrink-0 rounded-lg p-3 ${styles.bg}`}>
                    <category.icon className={`h-7 w-7 ${styles.icon}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {category.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className="absolute top-8 right-8 text-gray-900 transition-transform duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2">
                    <ArrowUpRightIcon className="h-6 w-6"/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;