import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function SubmitArticle() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const categories = [
    "Technology",
    "Business",
    "Sports",
    "Entertainment",
    "Science",
    "Health",
    "Politics",
    "World",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !category || !body) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const { error: insertError } = await supabase.from("posts").insert([
        {
          title: title.trim(),
          body: body.trim(),
          category,
        },
      ]);

      if (insertError) throw insertError;

      setSuccess("Article submitted successfully! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting article:", error);

      if (error.message.includes("row-level security policy")) {
        setError(
          "You do not have permission to submit articles. Please make sure you are logged in.",
        );
      } else {
        setError(`Failed to submit article: ${error.message}`);
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="card">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Submit New Article
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Share your story with the community
          </p>
        </div>

        {error && <div className="alert alert-error mb-6">{error}</div>}

        {success && <div className="alert alert-success mb-6">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Article Title
            </label>
            <input
              id="title"
              type="text"
              required
              maxLength={200}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="Enter article title"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Article Content
            </label>
            <textarea
              id="body"
              required
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="input resize-y"
              placeholder="Write your article here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary"
          >
            {loading ? "Submitting..." : "Submit Article"}
          </button>
        </form>
      </div>
    </div>
  );
}
