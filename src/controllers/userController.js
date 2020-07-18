const userController = {

    index:(req, res)=>{
        res.status(200).json({ message: "Olá Mundo!" });
    }

}

module.exports = userController;