import localStrategy from "passport-local";
import Users from "../models";
import bcrypt from "bcryptjs";

export default new localStrategy.Strategy(
  (username: string, password: string, done) => {
    Users.findOne({ username: username }, (error: Error, doc: any) => {
      if (error) {
        throw error;
      }
      if (!doc) {
        return done(null, false);
      } else {
        bcrypt.compare(password, doc.password, (error: Error, res: boolean) => {
          if (error) {
            throw error;
          }
          if (res) {
            return done(null, doc);
          } else {
            return done(null, false);
          }
        });
      }
    });
  }
);
