package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Youtube;

public interface YoutubeDAO {
	
	public BigInteger save(Youtube youtube);
	public void update(Youtube youtube,long id);
	public void delete(long id);
	public List<Youtube> list();
	public Youtube get(long id);

}
