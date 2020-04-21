package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;
import boomlet.app.data.Twitter;

public interface TwitterDAO {
	
	public BigInteger save(Twitter twitter);
	public void update(Twitter twitter,long id);
	public void delete(long id);
	public List<Twitter> list();
	public Twitter get(long id);

}
