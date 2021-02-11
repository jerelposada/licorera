exports.index= (req, res) => {
    res.render('index',{
        nombrePagina : 'Proyectos'
    });
}

exports.about = (req, res) => res.render('about');