export default function ArticleCard({ article }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Business: "bg-green-100 text-green-800",
      Sports: "bg-orange-100 text-orange-800",
      Entertainment: "bg-purple-100 text-purple-800",
      Science: "bg-cyan-100 text-cyan-800",
      Health: "bg-pink-100 text-pink-800",
      Politics: "bg-red-100 text-red-800",
      World: "bg-indigo-100 text-indigo-800",
      Other: "bg-gray-100 text-gray-800",
    };
    return colors[category] || colors.Other;
  };

  return (
    <article className="card">
      <span className={`badge ${getCategoryColor(article.category)} mb-3`}>
        {article.category}
      </span>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>

      <p className="text-gray-600 mb-4 line-clamp-3">{article.body}</p>

      <div className="text-sm text-gray-500">
        Published on {formatDate(article.created_at)}
      </div>
    </article>
  );
}
