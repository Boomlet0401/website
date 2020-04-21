package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;
import boomlet.app.data.Facebook;

public interface FacebookDAO {	
	public BigInteger save(Facebook facebook);
	public void update(Facebook facebook,long id);
	public void delete(long id);
	public List<Facebook> list();
	public Facebook get(long id);
}
