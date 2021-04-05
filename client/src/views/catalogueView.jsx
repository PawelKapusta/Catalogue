import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import { listCharacters } from '../actions/charactersActions';
import CharacterDescription from '../components/CharacterDescription/CharacterDescription';
import uuid from 'react-uuid';
import { listFilms } from '../actions/filmActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/Loader/Loader';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1460,
    margin: 'auto',
    marginTop: 90,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root2: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const getFilmId = string => parseInt(string.substring(27, string.lastIndexOf('/')));

const CatalogueView = () => {
  const classes = useStyles();
  const { characters, loading: charactersLoading, error: charactersError } = useSelector(
    state => state.charactersList,
  );
  const { films, filmLoading, error: filmsError } = useSelector(state => state.filmsList);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(listCharacters(pageNumber));
  }, [pageNumber]);

  useEffect(() => {
    dispatch(listFilms());
  }, []);

  const getFilmNames = filmsURLList =>
    filmsURLList.map(
      url => films?.find(film => film.episode_id === getFilmId(url))?.title ?? 'No title',
    );

  return (
    <>
      <section>
        {(charactersError?.length > 0 || filmsError?.length > 0) && (
          <div>
            <p>{charactersError[0]}</p>
            <br />
            <p>{filmsError[0]}</p>
          </div>
        )}
      </section>
      <InfiniteScroll
        dataLength={characters.length - 1}
        next={pageNumber < 9 ? () => setPageNumber(pageNumber + 1) : () => setHasMore(false)}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: 'hidden' }}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Star Wars Characters Catalogue
            </ListSubheader>
          }
          className={classes.root}>
          {characters?.map(({ name, gender, birth_year, height, films }) => (
            <CharacterDescription
              key={uuid()}
              name={name}
              gender={gender}
              birth_year={birth_year}
              height={height}
              films={getFilmNames(films)}
            />
          ))}
        </List>
      </InfiniteScroll>
    </>
  );
};

export default CatalogueView;
