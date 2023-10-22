import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      // Kullanıcı doğrulama başarılı olduğunda buraya gelin
      // 'profile' objesi kullanıcının Google profil bilgilerini içerir

      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  // Kullanıcı kimliğini oturumda saklayın
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Kullanıcı kimliğini kullanarak kullanıcıyı bulun

  done(null, user);
});
