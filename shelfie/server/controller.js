module.exports ={
    read: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_inventory()
        .then(response => res.status(200).send(response))
        .catch(err => {
            res.status(500).send({ errorMessage: 'You done did f@ck it up.' })
            console.log(err)
        })
    },
    create: (req, res) => {
        const dbi = req.app.get('db');
        const {name, price, img} = req.body
        
        dbi.create_product([name, price, img], console.log('Hello???'))
        .then(response => res.status(200).send(response))
        .catch(err => {
            res.status(500).send({ errorMessage: 'You f@cked it up.' })
            console.log(err)
        })
    }
}