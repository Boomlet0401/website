package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Linkedin;

public interface LinkedinDAO {
	
	public BigInteger save(Linkedin linked);
	public void update(Linkedin linked,long id);
	public void delete(long id);
	public List<Linkedin> list();
	public Linkedin get(long id);

}
