import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function PartCard({ part, onLike, onRemove }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={part.image}
        alt={part.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {part.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {part.category}
            </p>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${part.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {part.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLike(part.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
            >
              {part.likes > 0 ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
              <span>{part.likes}</span>
            </button>
            <span className={`px-2 py-1 rounded text-xs ${
              part.inStock
                ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
            }`}>
              {part.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <button
            onClick={() => onRemove(part.id)}
            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
} 