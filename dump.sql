--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Name: genre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- Name: movie; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movie (
    id integer NOT NULL,
    name text NOT NULL,
    "idGenre" integer NOT NULL
);


--
-- Name: moviePlatform; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."moviePlatform" (
    id integer NOT NULL,
    "idMovie" integer NOT NULL,
    "idPlatform" integer NOT NULL
);


--
-- Name: moviePlatform_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."moviePlatform_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: moviePlatform_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."moviePlatform_id_seq" OWNED BY public."moviePlatform".id;


--
-- Name: movie_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;


--
-- Name: platform; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platform (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: platform_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platform_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platform_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platform_id_seq OWNED BY public.platform.id;


--
-- Name: userMovieStatus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userMovieStatus" (
    id integer NOT NULL,
    username text NOT NULL,
    "idMovie" integer NOT NULL,
    watched boolean NOT NULL,
    note text,
    summary text
);


--
-- Name: userMovieStatus_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."userMovieStatus_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userMovieStatus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."userMovieStatus_id_seq" OWNED BY public."userMovieStatus".id;


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- Name: movie id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);


--
-- Name: moviePlatform id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviePlatform" ALTER COLUMN id SET DEFAULT nextval('public."moviePlatform_id_seq"'::regclass);


--
-- Name: platform id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platform ALTER COLUMN id SET DEFAULT nextval('public.platform_id_seq'::regclass);


--
-- Name: userMovieStatus id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userMovieStatus" ALTER COLUMN id SET DEFAULT nextval('public."userMovieStatus_id_seq"'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('3bf337e5-9a58-4d87-a192-b9a663973fb6', 'd6f60cfd93121a76286c2f52e8e372d490d26ed1e2eb5e90a4b9101d70286c1f', '2023-01-27 15:46:10.45236-03', '20230127184610_migration_foreign_key', NULL, NULL, '2023-01-27 15:46:10.389607-03', 1);


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genre VALUES (1, 'Ação');
INSERT INTO public.genre VALUES (2, 'Comédia');
INSERT INTO public.genre VALUES (3, 'Drama');
INSERT INTO public.genre VALUES (4, 'Romance');
INSERT INTO public.genre VALUES (5, 'Documentário');
INSERT INTO public.genre VALUES (6, 'Suspense');
INSERT INTO public.genre VALUES (7, 'Terror');
INSERT INTO public.genre VALUES (8, 'Ficção científica');
INSERT INTO public.genre VALUES (9, 'Testando');


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movie VALUES (1, 'Star Wars', 2);
INSERT INTO public.movie VALUES (2, 'Star Wars 2', 2);
INSERT INTO public.movie VALUES (3, 'Star Wars 3', 2);
INSERT INTO public.movie VALUES (4, 'Star Wars 4', 2);
INSERT INTO public.movie VALUES (5, 'Star Wars 5', 2);
INSERT INTO public.movie VALUES (9, 'Bob Esponja', 2);
INSERT INTO public.movie VALUES (12, 'Bob Esponja 2', 2);
INSERT INTO public.movie VALUES (13, 'Bob Esponja 3', 2);
INSERT INTO public.movie VALUES (16, 'Bob Esponja 4', 2);
INSERT INTO public.movie VALUES (18, 'Laranja Mecanica', 5);


--
-- Data for Name: moviePlatform; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."moviePlatform" VALUES (1, 1, 2);
INSERT INTO public."moviePlatform" VALUES (2, 2, 2);
INSERT INTO public."moviePlatform" VALUES (3, 3, 2);
INSERT INTO public."moviePlatform" VALUES (4, 4, 2);
INSERT INTO public."moviePlatform" VALUES (5, 5, 2);
INSERT INTO public."moviePlatform" VALUES (6, 9, 2);
INSERT INTO public."moviePlatform" VALUES (7, 12, 10);
INSERT INTO public."moviePlatform" VALUES (8, 13, 1);
INSERT INTO public."moviePlatform" VALUES (9, 16, 10);
INSERT INTO public."moviePlatform" VALUES (10, 18, 3);


--
-- Data for Name: platform; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platform VALUES (1, 'Netflix');
INSERT INTO public.platform VALUES (2, 'Amazon Prime');
INSERT INTO public.platform VALUES (3, 'HBO Max');
INSERT INTO public.platform VALUES (4, 'GloboPlay');
INSERT INTO public.platform VALUES (5, 'Disney+');
INSERT INTO public.platform VALUES (6, 'Paramount+');
INSERT INTO public.platform VALUES (8, 'Amazon');
INSERT INTO public.platform VALUES (10, 'Amazon prime');


--
-- Data for Name: userMovieStatus; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."userMovieStatus" VALUES (6, 'pedro alves', 5, false, NULL, NULL);
INSERT INTO public."userMovieStatus" VALUES (8, 'pedro alves', 1, false, NULL, NULL);
INSERT INTO public."userMovieStatus" VALUES (12, 'pedro alves', 18, false, NULL, NULL);
INSERT INTO public."userMovieStatus" VALUES (1, 'Lilica', 1, true, 'muito legal', NULL);


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genre_id_seq', 10, true);


--
-- Name: moviePlatform_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."moviePlatform_id_seq"', 10, true);


--
-- Name: movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movie_id_seq', 18, true);


--
-- Name: platform_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platform_id_seq', 11, true);


--
-- Name: userMovieStatus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."userMovieStatus_id_seq"', 12, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);


--
-- Name: moviePlatform moviePlatform_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviePlatform"
    ADD CONSTRAINT "moviePlatform_pkey" PRIMARY KEY (id);


--
-- Name: movie movie_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT movie_pkey PRIMARY KEY (id);


--
-- Name: platform platform_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platform
    ADD CONSTRAINT platform_pkey PRIMARY KEY (id);


--
-- Name: userMovieStatus userMovieStatus_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userMovieStatus"
    ADD CONSTRAINT "userMovieStatus_pkey" PRIMARY KEY (id);


--
-- Name: genre_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX genre_name_key ON public.genre USING btree (name);


--
-- Name: movie_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX movie_name_key ON public.movie USING btree (name);


--
-- Name: platform_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX platform_name_key ON public.platform USING btree (name);


--
-- Name: moviePlatform moviePlatform_idMovie_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviePlatform"
    ADD CONSTRAINT "moviePlatform_idMovie_fkey" FOREIGN KEY ("idMovie") REFERENCES public.movie(id);


--
-- Name: moviePlatform moviePlatform_idPlatform_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."moviePlatform"
    ADD CONSTRAINT "moviePlatform_idPlatform_fkey" FOREIGN KEY ("idPlatform") REFERENCES public.platform(id);


--
-- Name: movie movie_idGenre_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "movie_idGenre_fkey" FOREIGN KEY ("idGenre") REFERENCES public.genre(id);


--
-- Name: userMovieStatus userMovieStatus_idMovie_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userMovieStatus"
    ADD CONSTRAINT "userMovieStatus_idMovie_fkey" FOREIGN KEY ("idMovie") REFERENCES public.movie(id);


--
-- PostgreSQL database dump complete
--

