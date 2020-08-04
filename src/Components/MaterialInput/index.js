import React, { useEffect, useState } from "react";
import NoSsr from "@material-ui/core/NoSsr";
import useAutocomplete from "@material-ui/lab/useAutocomplete";

import api from "../../services/api";

import { InputWrapper, Label, Listbox, Tag } from "./styles";

export default function MaterialInput({ setArtists, access_token }) {
  const [artistSearchedList, setArtistSearchedList] = useState([]);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    inputValue,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    multiple: true,
    options: artistSearchedList,
    getOptionLabel: (option) => option.name,
  });

  useEffect(() => {
    if (inputValue === "") return setArtistSearchedList([]);

    async function search() {
      try {
        const { data } = await api.get(`/artist?name=${inputValue}`, {
          headers: {
            Authorization: access_token,
          },
        });

        console.log(data.data.artists.items[0].images[0].url);

        setArtistSearchedList(data.data.artists.items);
      } catch (error) {
        console.log(error);
      }
    }

    search();
  }, [inputValue, access_token]);

  useEffect(() => {
    setArtists(value);
  }, [value, setArtists]);

  return (
    <NoSsr>
      <div>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>
            <span>Buscar Artistas</span>
          </Label>
          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            {value.map((option, index) => (
              <Tag label={option.name} {...getTagProps({ index })} />
            ))}

            <input {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <img src={option.images[0]?.url} alt={option.name} />
                <span>{option.name}</span>
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
  );
}
