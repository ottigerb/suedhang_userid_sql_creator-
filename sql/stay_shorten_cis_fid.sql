-- Shorten 'cis_fid'; Basically remove last two digits

UPDATE "stay"
SET cis_fid = cis_fid / 100
