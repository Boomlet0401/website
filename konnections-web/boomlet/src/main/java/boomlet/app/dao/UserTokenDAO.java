package boomlet.app.dao;

import java.math.BigInteger;

import boomlet.app.data.User;
import boomlet.app.data.UserToken;

public interface UserTokenDAO {
	public BigInteger generateToken(User user);
	public UserToken getToken(long id);
	public UserToken checkToken(UserToken userToken);
}
