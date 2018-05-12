module.exports ={
  properties: (req, res) => {
    req.db.findProperties([req.session.user])
        .then(properties => {
            console.log(`properties are on the way`);
            res.send(properties)
        })
},
  addProperty: (req, res) => {

    const { propertyName, propertyDescription, state, zip, address, city, imgUrl, loanAmount, monthlyMortgage, desiredRent } = req.body;

    req.db.insertProperty({ propertyName, propertyDescription, state, zip, address, city, imgUrl, loanAmount, monthlyMortgage, desiredRent, user_id:req.session.user
    })
        .then(user => {
            res.send({ success: true, message: 'property added' });
        })
        .catch(err =>{
          console.log(err)
        });
  },
  removeProperty: (req, res)=>{
    req.db.deleteProperty({ property_id: req.params.id})
        .then(newProperties =>{
            console.log('successfully removed')
            return req.db.findProperties(req.session.user)
        })
        .then(properties => {
            res.send(properties)
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send(err)
          });
  }
}