from flask import Flask, render_template
import os


def create_app() -> Flask:
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    public_path = os.path.join(project_root, "public")

    app = Flask(
        __name__,
        static_folder=public_path,
        static_url_path="",
        template_folder=os.path.join(os.path.dirname(__file__), "templates"),
    )

    @app.route("/")
    def index():
        return render_template("index.html")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)


