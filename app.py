from flask import Flask, render_template, request

app = Flask(__name__)

@app.get("/")
def index():
    return render_template("index.html")

@app.get("/sobre")
def sobre():
    return render_template("sobre.html")

@app.get("/projetos")
def projetos():
    return render_template("projetos.html")

@app.route("/contato", methods=["GET", "POST"])
def contato():
    sent = False
    if request.method == "POST":
        # Aqui você pode integrar com e-mail (SMTP), banco, etc.
        # Por enquanto, apenas confirmamos envio na UI.
        sent = True
    return render_template("contato.html", sent=sent)

if __name__ == "__main__":
    app.run(debug=True)