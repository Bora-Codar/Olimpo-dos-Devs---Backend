const testController = {

    index:(req, res)=>{
        res.status(200).json({ message: "Olá Mundo!" });
    }

}

module.exports = testController;