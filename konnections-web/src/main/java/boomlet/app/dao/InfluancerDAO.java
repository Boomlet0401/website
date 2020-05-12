package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Influancer;

public interface InfluancerDAO {
	
	public BigInteger save(Influancer user);
	public long update(Influancer user,long id);
	public void delete(long id);
	public List<Influancer> list();
	public Influancer get(long id);		
	
}
