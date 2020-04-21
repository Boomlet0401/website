package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Instagram;

public interface InstagramDAO {
	
	public BigInteger save(Instagram instagram);
	public void update(Instagram instagram,long id);
	public void delete(long id);
	public List<Instagram> list();
	public Instagram get(long id);

}
