module.exports={
  logout: (req, res) =>{
    req.session.destroy();
    res.send({ success: true, message: 'Logged out successfully' });
  },
  login: (req, res) => {
    const { email, password } = req.body;

    req.db.user_table.findOne({ email, password })
        .then(user => {
            if (!user) {
                return res.status(401).send({ success: false, message: 'it did not work' });
            }
            req.session.user = user.user_id
            res.send({ success: true, message: 'Logged in successfully' });
        })
        .catch(err=>{
          console.log("invalid credentials")
        });
  },
  register: (req, res) => {
    const { email, password } = req.body;

    req.db.user_table.insert({ email, password })
        .then(user => {
          req.session.user = user.user_id
            res.send({ success: true, message: 'logged in successfully' });
        })
        .catch(err =>{
          console.log(err)
        }

        );
  }
}