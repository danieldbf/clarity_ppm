SELECT  
    CDF.NAME AS NAME_FILE,
    CDF.MIME_TYPE AS TYPE_FILE,
    SUBSTR(TO_CHAR(CDV.ID),2,3) || '/00' || SUBSTR(TO_CHAR(CDV.ID),1,1) AS DIR_PATH,
    TO_CHAR(CDV.ID) AS FILE_ID
FROM 
    CLB_DMS_FILES CDF 
JOIN 
    CLB_DMS_VERSIONS CDV 
    ON (CDF.ID = CDV.FILE_ID)			
JOIN 
    CLB_DMS_FOLDERS CDFD 
    ON (CDF.PARENT_FOLDER_ID = CDFD.ID)
